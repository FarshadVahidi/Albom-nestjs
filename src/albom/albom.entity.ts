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
export class Albom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @JoinTable()
  @ManyToMany((type) => Photo, (photo) => photo.alboms, { cascade: true })
  photos: Photo[];

  @ManyToOne((type) => Person, (person) => person.alboms, { cascade: true})
  persons: Person[];
}
