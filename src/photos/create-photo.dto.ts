import { IsString } from 'class-validator';

export class CreatePhotoDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly place: string;

  @IsString()
  readonly date: string;
}
