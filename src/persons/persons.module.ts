import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person.entity';
import { Photo } from '../photos/photo.entity';
import { Album } from '../album/album.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person, Photo, Album])],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}
