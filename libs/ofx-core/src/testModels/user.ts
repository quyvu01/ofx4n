import { OfXConfigFor } from '../abstractions/ofxConfigFor';
import { UserOf } from './userOf.decorator';

@OfXConfigFor(UserOf, 'id', 'name')
export class User {
  id: string;
  name: string;
  email: string;
}
