import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Albom } from './albom.entity';
import { Repository } from 'typeorm';
import { CreateAlbomDto } from './create-albom.dto';
import { UpdateAlbomDto } from './update-albom.dto';
import { Photo } from '../photos/photo.entity';

@Injectable()
export class AlbomsService {
  constructor(
    @InjectRepository(Albom)
    private readonly albomRepository: Repository<Albom>,
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  findAll() {
    return this.albomRepository.find({
      relations: ['photos'],
    });
  }

  async findOne(id: string) {
    const albom = await this.albomRepository.findOne(id, {
      relations: ['photos'],
    });
    if (!albom) {
      throw new NotFoundException('albom with this id not found');
    }
    return albom;
  }

  async create(createAlbomDto: CreateAlbomDto) {
    const photos = await Promise.all(
      createAlbomDto.photos.map((name) => this.preloadPhotoByName(name)),
    );

    const albom = this.albomRepository.create({ ...createAlbomDto, photos });
    return this.albomRepository.save(albom);
  }

  async update(id: string, updateAlbomDto: UpdateAlbomDto) {
    const photos =
      updateAlbomDto.photos &&
      (await Promise.all(
        updateAlbomDto.photos.map((name) => this.preloadPhotoByName(name)),
      ));
    const albom = await this.albomRepository.preload({
      id: +id,
      ...updateAlbomDto,
      photos,
    });
    if (!albom) {
      throw new NotFoundException('albom with this id not found');
    }
    return this.albomRepository.save(albom);
  }

  async remove(id: string) {
    const albom = await this.findOne(id);
    return this.albomRepository.remove(albom);
  }

  private async preloadPhotoByName(name: string): Promise<Photo> {
    const existingPhoto = await this.photoRepository.findOne(name);
    if (existingPhoto) {
      return existingPhoto;
    }
    return this.photoRepository.create(existingPhoto);
  }
}
