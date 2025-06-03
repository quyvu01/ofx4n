import { UserOf } from './userOf.decorator';

export class Member {
  id: string;
  userId: string;
  @UserOf('userId')
  userName?: string;
}
