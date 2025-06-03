import { OfXDecorator } from './ofx.decorator';
import { IOfXBase } from './ofxBase.interface';
import { RequestOf } from './requestOf';

export interface IContext {
  headers: Map<string, string>;
}

export interface RequestContext<T extends OfXDecorator> extends IOfXBase<T> {
  readonly query: RequestOf<T>;
  readonly context?: IContext;
}
