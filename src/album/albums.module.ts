import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { Photo } from '../photos/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Album, Photo])],
  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumsModule {}
