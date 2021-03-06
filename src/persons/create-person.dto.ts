import { IsString } from 'class-validator';
import { Photo } from '../photos/photo.entity';

export class CreatePersonDto {
  @IsString()
  name: string;

  @IsString({ each: true })
  readonly photos: string[];
}
