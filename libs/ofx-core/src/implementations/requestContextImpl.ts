import { OfXDecorator } from '../abstractions/ofx.decorator';
import {
  IContext,
  RequestContext as RequestContext,
} from '../abstractions/ofxContext.interface';
import { RequestOf } from '../abstractions/requestOf';

export class RequestContextImpl<T extends OfXDecorator>
  implements RequestContext<T>
{
  query: RequestOf<T>;
  headers?: Map<string, string>;
  constructor(query: RequestOf<T>, headers?: Map<string, string>) {
    this.query = query;
    this.headers = headers;
    return this;
  }
}
