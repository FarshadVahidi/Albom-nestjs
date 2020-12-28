import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Person } from '../persons/person.entity';
import { Albom } from '../albom/albom.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => Person, (person) => person.photos, {
    cascade: true,
  })
  person: Person;

  @ManyToMany((type) => Albom, (albom) => albom.photos)
  alboms: Albom[];
}
