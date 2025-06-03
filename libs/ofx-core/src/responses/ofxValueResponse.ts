export class OfXValueResponse {
  expression?: string;
  value?: string;
  constructor(expression?: string, value?: string) {
    this.expression = expression;
    this.value = value;
    return this;
  }
}
