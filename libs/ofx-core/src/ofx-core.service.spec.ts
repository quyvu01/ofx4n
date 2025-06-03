import { Member } from './testModels/member.dto';
import { OfXFieldMetadata } from '@app/ofx-core/abstractions/ofxFieldMetadata.interface';

describe('MemberOf', () => {
  const member = new Member();
  member.id = '1';
  member.userId = '2';

  const dependencies = scanOfXDecorators(member);

  console.log(dependencies);

  beforeEach(() => {});

  it('temperature ok', () => {
    expect(member.userName == '1234');
  });
});

export function scanOfXDecorators(
  target: object,
): Record<string, OfXFieldMetadata> {
  const result: Record<string, OfXFieldMetadata> = {};
  for (const key of Object.keys(target)) {
    const meta = Reflect.getMetadata(
      'ofx:field',
      target,
      key,
    ) as OfXFieldMetadata;
    if (meta?.kind === 'ofx') {
      result[key] = meta;
    }
  }
  return result;
}
