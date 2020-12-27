import { Injectable } from '@nestjs/common';
import { Person } from './person.entity';

@Injectable()
export class PersonsService {
  private persons: Person[] = [{ id: 1, name: 'Farshad' }];

  findAll() {
    return this.persons;
  }

  findOne(id: string) {
    return this.persons.find( item => item.id === +id );
  }

  create(createPersonDto: any) {
    this.persons.push(createPersonDto);
  }

  update(id: string, updatePersonDto: any) {
    const existingPerson = this.findOne(id);
    if ( existingPerson ) {
    }
  }

  remove(id: string) {
    const personInex = this.persons.findIndex( item => item.id === +id);
    if ( personInex >= 0 ) {
      this.persons.splice(personInex, 1);
    }
  }
}
