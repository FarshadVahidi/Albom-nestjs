import { Injectable, NotFoundException } from '@nestjs/common';
import { Person } from './person.entity';

@Injectable()
export class PersonsService {
  private persons: Person[] = [{ id: 1, name: 'Farshad' }];

  findAll() {
    return this.persons;
  }

  findOne(id: string) {
    const person = this.persons.find((item) => item.id === +id);
    if (!person) {
      throw new NotFoundException('person with ${id} not found');
    }
    return person;
  }

  create(createPersonDto: any) {
    this.persons.push(createPersonDto);
  }

  update(id: string, updatePersonDto: any) {
    const existingPerson = this.findOne(id);
    if (existingPerson) {
    }
  }

  remove(id: string) {
    const personInex = this.persons.findIndex((item) => item.id === +id);
    if (personInex >= 0) {
      this.persons.splice(personInex, 1);
    }
  }
}
