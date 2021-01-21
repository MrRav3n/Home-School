import { Classrom } from './Classrom';
import { User } from './User';

export class UserServerResponse {
  classes: [Classrom];
  userToReturn: User;
  token: string;
}
