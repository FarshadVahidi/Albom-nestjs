import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Albom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
