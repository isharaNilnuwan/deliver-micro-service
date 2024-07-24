import { IsString } from 'class-validator';

export class CreateJokeDTO {
  @IsString()
  type: string;

  @IsString()
  content: string;

  @IsString()
  submitter: string;
}