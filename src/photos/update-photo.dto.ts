import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotoDto } from './create-photo.dto';
import { IsString } from 'class-validator';

export class UpdatePhotoDto extends PartialType(CreatePhotoDto) {
}
