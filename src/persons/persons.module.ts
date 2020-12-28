import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person.entity';
import { Photo } from '../photos/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person, Photo])],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}
