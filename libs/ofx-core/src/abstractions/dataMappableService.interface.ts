import { Injectable } from '@nestjs/common';
import { DataFetchQuery } from '../queries/dataFetchQuery';
import { ItemsResponse } from '../responses/itemResponse';
import { OfXDataResponse } from '../responses/ofxDataResponse';
import { OfXDecorator } from './ofx.decorator';

@Injectable()
export abstract class IDataMappableService {
  abstract mapDataAsync(value: any): Promise<void>;
  abstract fetchDataAsync<T extends OfXDecorator>(query: DataFetchQuery): Promise<ItemsResponse<OfXDataResponse>>;
}
