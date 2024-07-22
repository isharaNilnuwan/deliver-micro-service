import { IsString } from 'class-validator';

export class CreateTypeDTO {
  @IsString()
  jokeType: string;
}