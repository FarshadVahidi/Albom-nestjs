import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Photo } from '../photos/photo.entity';
import { Albom } from '../albom/albom.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Photo, (photo) => photo.person)
  photos: Photo[];

  @OneToMany((type) => Albom, (albom) => albom.persons)
  alboms: Albom[];
}
