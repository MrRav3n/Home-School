export class User {
  name?: string;
  surrname?: string;
  email: string;
  password?: string;
  userRole: 0|1; // 0 student 1 teacher
  friends?: string[];
  username?: string;
  userCode?: string;
}

