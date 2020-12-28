import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Albom } from './albom.entity';
import { Repository } from 'typeorm';
import { CreateAlbomDto } from './create-albom.dto';
import { UpdateAlbomDto } from './update-albom.dto';

@Injectable()
export class AlbomsService {
  constructor(
    @InjectRepository(Albom)
    private readonly albomRepository: Repository<Albom>,
  ) {}

  findAll() {
    return this.albomRepository.find();
  }

  async findOne(id: string) {
    const albom = await this.albomRepository.findOne(id);
    if (!albom) {
      throw new NotFoundException('albom with this id not found');
    }
    return albom;
  }

  create(createAlbomDto: CreateAlbomDto) {
    const albom = this.albomRepository.create(createAlbomDto);
    return this.albomRepository.save(albom);
  }

  async update(id: string, updateAlbomDto: UpdateAlbomDto) {
    const albom = await this.albomRepository.preload({
      id: +id,
      ...updateAlbomDto,
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
}
