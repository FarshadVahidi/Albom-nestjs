import { IsString } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  readonly name: string;

  @IsString({ each: true })
  readonly photos: string[];
}
