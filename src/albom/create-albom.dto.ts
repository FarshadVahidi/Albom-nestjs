import { IsString } from 'class-validator';

export class CreateAlbomDto {
  @IsString()
  readonly name: string;

  @IsString({ each: true })
  readonly photos: string[];
}
