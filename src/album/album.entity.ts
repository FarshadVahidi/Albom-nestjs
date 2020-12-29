import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Photo } from '../photos/photo.entity';
import { Person } from '../persons/person.entity';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @JoinTable()
  @ManyToMany((type) => Photo, (photo) => photo.albums, { cascade: true })
  photos: Photo[];

  @JoinTable()
  @ManyToOne((type) => Person, (person) => person.albums, { cascade: true })
  persons: Person[];
}
