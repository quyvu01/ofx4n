import { Test, TestingModule } from '@nestjs/testing';
import { OfxCoreService } from './ofx-core.service';
import { Member } from './testModels/member.dto';
import { OfXDecorator } from '@app/ofx-core/abstractions/ofx.decorator';

describe('OfxCoreService', () => {
  let service: OfxCoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfxCoreService],
    }).compile();

    service = module.get<OfxCoreService>(OfxCoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('MemberOf', () => {
  const member = new Member();
  member.id = '1';
  member.userId = '2';

  const dependencies = getUserOfDependencies(member);

  console.log(dependencies);

  beforeEach(() => {});

  it('temperature ok', () => {
    expect(member.userName == '1234');
  });
});

function getUserOfDependencies(obj: any): Record<string, string> {
  const result: Record<string, any> = {};

  for (const key of Object.keys(obj)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const metadata = Reflect.getMetadata('ofx:field', obj, key);
    if (metadata instanceof OfXDecorator) {
      result[key] = metadata;
    }
  }

  return result;
}
