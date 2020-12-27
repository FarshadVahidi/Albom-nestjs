import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsController } from './persons/persons.controller';
import { PersonsService } from './persons/persons.service';
import { PersonsModule } from './persons/persons.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'farshad',
      password: 'password',
      database: 'albom',
      entities: [],
      synchronize: true,
    }),
    PersonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
