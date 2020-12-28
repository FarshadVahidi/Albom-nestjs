import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { AlbomsService } from './alboms.service';
import { CreateAlbomDto } from './create-albom.dto';
import { UpdateAlbomDto } from './update-albom.dto';

@Controller('alboms')
export class AlbomsController {
  constructor(private readonly albomsService: AlbomsService) {}

  @Get()
  findAll() {
    return this.albomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.albomsService.findOne('' + id);
  }

  @Post()
  create(@Body() createAlbomDto: CreateAlbomDto) {
    return this.albomsService.create(createAlbomDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlbomDto: UpdateAlbomDto) {
    return this.albomsService.update(id, updateAlbomDto);
  }

  @Delete(':id')
  remove(@Param(':id') id: string) {
    return this.albomsService.remove(id);
  }
}
