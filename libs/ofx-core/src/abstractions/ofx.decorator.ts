export class OfXDecorator {
  propertyName: string;
  expression?: string;
  constructor(propertyName: string, expression?: string) {
    this.propertyName = propertyName;
    this.expression = expression;
    return this;
  }
}
