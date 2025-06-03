import { OfXDecorator } from '@app/ofx-core/abstractions/ofx.decorator';

export function UserOf(
  propertyName: string,
  expression?: string,
): PropertyDecorator {
  return (target: object, propertyKey: string | symbol) => {
    const metadata = new OfXDecorator(propertyName, expression);
    Reflect.defineMetadata('ofx:field', metadata, target, propertyKey);
  };
}