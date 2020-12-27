import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    //const { limit, offset } = paginationQuery;
    return this.personsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personsService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.personsService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.personsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personsService.remove(id);
  }
}
