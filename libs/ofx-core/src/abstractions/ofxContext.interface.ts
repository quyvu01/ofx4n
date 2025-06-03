import { OfXDecorator } from './ofx.decorator';
import { RequestOf } from './requestOf';

export interface IContext {
  headers: Map<string, string>;
}

export interface RequestContext<T extends OfXDecorator> {
  readonly query: RequestOf<T>;
  readonly context?: IContext;
}
