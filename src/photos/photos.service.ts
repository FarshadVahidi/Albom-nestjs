import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { CreatePhotoDto } from './create-photo.dto';
import { UpdatePhotoDto } from './update-photo.dto';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  findAll() {
    return this.photoRepository.find();
  }

  async findOne(id: string) {
    const photo = await this.photoRepository.findOne(id);
    if (!photo) {
      throw new NotFoundException('photo with ${id} not found');
    }
    return photo;
  }

  create(createPhotoDto: CreatePhotoDto) {
    const photo = this.photoRepository.create(createPhotoDto);
    return this.photoRepository.save(photo);
  }

  async update(id: string, updatePhotoDto: UpdatePhotoDto) {
    const photo = await this.photoRepository.preload({
      id: +id,
      ...updatePhotoDto,
    });
    if (!photo) {
      throw new NotFoundException('person with this ID not found');
    }
    return this.photoRepository.save(photo);
  }

  async remove(id: string) {
    const photo = await this.findOne(id);
    return this.photoRepository.remove(photo);
  }
}
