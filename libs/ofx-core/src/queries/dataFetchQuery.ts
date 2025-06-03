export class DataFetchQuery {
  selectorIds: string[];
  expressions: string[];
  constructor(selectorIds: string[], expressions: string[]) {
    this.selectorIds = selectorIds;
    this.expressions = expressions;
    return this;
  }
}
