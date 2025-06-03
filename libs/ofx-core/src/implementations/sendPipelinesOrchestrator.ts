import { IMappableRequestHandler } from '../abstractions/mappableRequestHandler.interface';
import { OfXDecorator } from '../abstractions/ofx.decorator';
import { IContext } from '../abstractions/ofxContext.interface';
import { RequestOf } from '../abstractions/requestOf';
import { ISendPipelineBehavior } from '../abstractions/sendPipelineBehavior.interface';
import { ISendPipelinesWrapped } from '../abstractions/sendPipelineBehaviorWrapper.interface';
import { MessageDeserializable } from '../applicationModels/messageDeserializable';
import { ItemsResponse } from '../responses/itemResponse';
import { OfXDataResponse } from '../responses/ofxDataResponse';
import { RequestContextImpl } from './requestContextImpl';

export class SendPipelinesOrchestrator<T extends OfXDecorator>
  implements ISendPipelinesWrapped
{
  constructor(
    private readonly behaviors: ISendPipelineBehavior<T>[],
    private readonly handler: IMappableRequestHandler<T>,
  ) {}

  async execute(
    message: MessageDeserializable,
    context: IContext,
  ): Promise<ItemsResponse<OfXDataResponse>> {
    const requestOf = new RequestOf<T>(message.selectorIds, message.expression);
    const requestContext = new RequestContextImpl<T>(
      requestOf,
      context?.headers,
    );

    const finalHandler = () => this.handler.requestAsync(requestContext);

    const pipeline = this.behaviors
      .slice() // ensure we don't mutate original array
      .reverse()
      .reduce(
        (next, behavior) => () => behavior.handle(requestContext, next),
        finalHandler,
      );

    return pipeline();
  }
}
