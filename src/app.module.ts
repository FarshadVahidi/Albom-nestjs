import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './persons/person.entity';
import { PhotoModule } from './photos/photo.module';
import { Photo } from './photos/photo.entity';
import { AlbomsModule } from './albom/alboms.module';
import { Albom } from './albom/albom.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'farshad',
      password: 'password',
      database: 'albom',
      entities: [Person, Photo, Albom],
      synchronize: true,
    }),
    PersonsModule,
    PhotoModule,
    AlbomsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
