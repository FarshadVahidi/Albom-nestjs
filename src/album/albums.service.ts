import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { Repository } from 'typeorm';
import { CreateAlbumDto } from './create-album.dto';
import { UpdateAlbumDto } from './update-album.dto';
import { Photo } from '../photos/photo.entity';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Album)
    private readonly albumRepository: Repository<Album>,
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  findAll() {
    return this.albumRepository.find({
      relations: ['photos'],
    });
  }

  async findOne(id: string) {
    const album = await this.albumRepository.findOne(id, {
      relations: ['photos'],
    });
    if (!album) {
      throw new NotFoundException('album with this id not found');
    }
    return album;
  }

  async create(createAlbumDto: CreateAlbumDto) {
    const photos = await Promise.all(
      createAlbumDto.photos.map((name) => this.preloadPhotoByName(name)),
    );

    const album = this.albumRepository.create({ ...createAlbumDto, photos });
    return this.albumRepository.save(album);
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto) {
    const photos =
      updateAlbumDto.photos &&
      (await Promise.all(
        updateAlbumDto.photos.map((name) => this.preloadPhotoByName(name)),
      ));
    const album = await this.albumRepository.preload({
      id: +id,
      ...updateAlbumDto,
      photos,
    });
    if (!album) {
      throw new NotFoundException('album with this id not found');
    }
    return this.albumRepository.save(album);
  }

  async remove(id: string) {
    const album = await this.findOne(id);
    return this.albumRepository.remove(album);
  }

  private async preloadPhotoByName(name: string): Promise<Photo> {
    const existingPhoto = await this.photoRepository.findOne(name);
    if (existingPhoto) {
      return existingPhoto;
    }
    return this.photoRepository.create(existingPhoto);
  }
}
