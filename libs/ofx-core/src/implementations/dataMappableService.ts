import { IDataMappableService } from '@app/ofx-core/abstractions/dataMappableService.interface';
import { OfXDecorator } from '@app/ofx-core/abstractions/ofx.decorator';
import { DataFetchQuery } from '@app/ofx-core/queries/dataFetchQuery';
import { ItemsResponse } from '@app/ofx-core/responses/itemResponse';
import { OfXDataResponse } from '@app/ofx-core/responses/ofxDataResponse';

export class DataMappableService implements IDataMappableService {
  fetchDataAsync<T extends OfXDecorator>(query: DataFetchQuery): Promise<ItemsResponse<OfXDataResponse>> {
    return Promise.resolve(new ItemsResponse<OfXDataResponse>([]));
  }

  mapDataAsync(value: any): Promise<void> {
    return Promise.resolve(undefined);
  }
}