export class MessageDeserializable {
  selectorIds: string[];
  expression: string;
  constructor(selectorIds: string[], expression: string) {
    this.selectorIds = selectorIds;
    this.expression = expression;
    return this;
  }
}
