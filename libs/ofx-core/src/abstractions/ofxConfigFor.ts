import { OfXDecoratorFactory } from './ofXDecoratorFactory';

export function OfXConfigFor(
  factory: OfXDecoratorFactory,
  idProperty: string,
  defaultPropertyName: string,
): ClassDecorator {
  return (target: any) => {
    Reflect.defineMetadata('ofx:config.for', factory, target);
  };
}
