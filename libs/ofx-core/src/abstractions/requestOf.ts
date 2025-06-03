import { OfXDecorator } from './ofx.decorator';

export class RequestOf<T extends OfXDecorator> {
  selectorIds: string[];
  expression: string;
  constructor(selectorIds: string[], expression: string) {
    this.selectorIds = selectorIds;
    this.expression = expression;
    return this;
  }
}
