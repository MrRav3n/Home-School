import { Response } from './Response';

export class Homework {
  description: string;
  id: string;
  name: string;
  responses: [Response];
  subjectID: string;
  time: string;
  createDate: string;
  endDate: string;
  mark: number;
}
