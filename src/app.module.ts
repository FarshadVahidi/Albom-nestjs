import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsController } from './persons/persons.controller';

@Module({
  imports: [],
  controllers: [AppController, PersonsController],
  providers: [AppService],
})
export class AppModule {}
