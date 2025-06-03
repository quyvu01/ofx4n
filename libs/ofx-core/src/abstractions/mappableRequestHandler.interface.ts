import { ItemsResponse } from '../responses/itemResponse';
import { OfXDataResponse } from '../responses/ofxDataResponse';
import { OfXDecorator } from './ofx.decorator';
import { IOfXBase } from './ofxBase.interface';
import { RequestContext } from './ofxContext.interface';

export interface IMappableRequestHandler<T extends OfXDecorator>
  extends IOfXBase<T> {
  requestAsync(
    requestContext: RequestContext<T>,
  ): Promise<ItemsResponse<OfXDataResponse>>;
}

export class DefaultMappableRequestHandler<T extends OfXDecorator>
  implements IMappableRequestHandler<T>
{
  requestAsync(_: RequestContext<T>): Promise<ItemsResponse<OfXDataResponse>> {
    return new Promise<ItemsResponse<OfXDataResponse>>(() => []);
  }
}
