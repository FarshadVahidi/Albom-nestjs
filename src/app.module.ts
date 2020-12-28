import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './persons/person.entity';
import { PhotoModule } from './photos/photo.module';
import { Photo } from './photos/photo.entity';
import { AlbomController } from './albom/albom.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'farshad',
      password: 'password',
      database: 'albom',
      entities: [Person, Photo],
      synchronize: true,
    }),
    PersonsModule,
    PhotoModule,
  ],
  controllers: [AppController, AlbomController],
  providers: [AppService],
})
export class AppModule {}
