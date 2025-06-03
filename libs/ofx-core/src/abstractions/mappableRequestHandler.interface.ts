import { Injectable } from '@nestjs/common';
import { ItemsResponse } from '../responses/itemResponse';
import { OfXDataResponse } from '../responses/ofxDataResponse';
import { OfXDecorator } from './ofx.decorator';
import { IOfXBase } from './ofxBase.interface';
import { RequestContext } from './ofxContext.interface';

@Injectable()
export abstract class IMappableRequestHandler<T extends OfXDecorator>
  implements IOfXBase<T> {
  abstract requestAsync(
    requestContext: RequestContext<T>,
  ): Promise<ItemsResponse<OfXDataResponse>>;
}

export class DefaultMappableRequestHandler<T extends OfXDecorator>
  implements IMappableRequestHandler<T>
{
  requestAsync(_: RequestContext<T>): Promise<ItemsResponse<OfXDataResponse>> {
    return Promise.resolve(new ItemsResponse<OfXDataResponse>([]));
  }
}
