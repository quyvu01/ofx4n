import { DataFetchQuery } from '../queries/dataFetchQuery';
import { ItemsResponse } from '../responses/itemResponse';
import { OfXDataResponse } from '../responses/ofxDataResponse';
import { OfXDecorator } from './ofx.decorator';

export interface IDataMappableService {
  mapDataAsync(value: any): Promise<void>;
  fetchDataAsync<T extends OfXDecorator>(
    query: DataFetchQuery,
  ): Promise<ItemsResponse<OfXDataResponse>>;
}
