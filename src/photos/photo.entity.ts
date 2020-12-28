import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Person } from '../persons/person.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  place: string;

  @Column()
  date: string;

  @ManyToOne((type) => Person, (person) => person.photos)
  person: Person;
}
