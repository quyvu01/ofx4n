import { ItemsResponse } from '../responses/itemResponse';
import { OfXDataResponse } from '../responses/ofxDataResponse';
import { OfXDecorator } from './ofx.decorator';

export interface IQueryOfHandler<TModel, T extends OfXDecorator> {
  getDataAsync(): Promise<ItemsResponse<OfXDataResponse>>;
}
