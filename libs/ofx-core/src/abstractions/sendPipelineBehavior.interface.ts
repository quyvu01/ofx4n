import { ItemsResponse as ItemsResponse } from '../responses/itemResponse';
import { OfXDataResponse } from '../responses/ofxDataResponse';
import { OfXDecorator } from './ofx.decorator';
import { RequestContext as RequestContext } from './ofxContext.interface';

export interface ISendPipelineBehavior<T extends OfXDecorator> {
  handle(
    context: RequestContext<T>,
    next: () => Promise<ItemsResponse<OfXDataResponse>>,
  ): Promise<ItemsResponse<OfXDataResponse>>;
}
