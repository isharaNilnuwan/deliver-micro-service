import { IsString } from 'class-validator';

export class CreateJokeDTO {
  @IsString()
  jokeType: string;

  @IsString()
  joke: string;

  @IsString()
  submitter: string;
}