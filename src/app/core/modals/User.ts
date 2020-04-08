export class User {
  name: string;
  surrname: string;
  email: string;
  password?: string;
  role: 0|1; // 0 student 1 teacher
  friends: string[];
  username?: string;
  code?: string;
}

