import { MessageDeserializable } from '../applicationModels/messageDeserializable';
import { ItemsResponse } from '../responses/itemResponse';
import { OfXDataResponse } from '../responses/ofxDataResponse';
import { IContext } from './ofxContext.interface';

export interface ISendPipelinesWrapped {
  execute(
    message: MessageDeserializable,
    context: IContext,
  ): Promise<ItemsResponse<OfXDataResponse>>;
}
