import { IsString } from 'class-validator';

export class CreatePersonDto {

  @IsString()
  readonly name: string;
}
