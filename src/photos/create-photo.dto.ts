import { IsInt, IsString } from 'class-validator';

export class CreatePhotoDto {
  @IsString()
  readonly name: string;
}
