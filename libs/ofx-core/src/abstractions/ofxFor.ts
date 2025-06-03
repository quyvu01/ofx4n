import { OfXFieldMetadata } from '@app/ofx-core/abstractions/ofxFieldMetadata.interface';
import { OfXDecoratorFactory } from './ofXDecoratorFactory';

export function OfXFor(type: string): OfXDecoratorFactory {
  return (propertyName, expression) => (target, propertyKey) => {
    const metadata: OfXFieldMetadata = {
      kind: 'ofx',
      type,
      propertyName,
      expression,
    };
    Reflect.defineMetadata('ofx:field', metadata, target, propertyKey);
  };
}
