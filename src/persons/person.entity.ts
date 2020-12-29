import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Photo } from '../photos/photo.entity';
import { Album } from '../album/album.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Photo, (photo) => photo.person)
  photos: Photo[];

  @OneToMany((type) => Album, (albom) => albom.persons)
  albums: Album[];
}
