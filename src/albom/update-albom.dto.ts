import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbomDto } from './create-albom.dto';

export class UpdateAlbomDto extends PartialType(CreateAlbomDto) {}
