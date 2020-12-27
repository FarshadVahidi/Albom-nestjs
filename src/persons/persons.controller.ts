import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('persons')
export class PersonsController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return 'This action returns all persons. Limit: ${limit}, offset: ${offset}';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'This action returns #${id} persons';
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return 'This action update #${id} coffee';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'This action remove #${id} from persons';
  }
}
