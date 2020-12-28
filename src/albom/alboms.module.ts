import { Module } from '@nestjs/common';
import { AlbomsController } from './alboms.controller';
import { AlbomsService } from './alboms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Albom } from './albom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Albom])],
  controllers: [AlbomsController],
  providers: [AlbomsService],
})
export class AlbomsModule {}
