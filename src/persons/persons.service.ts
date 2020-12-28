import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';
import { CreatePersonDto } from './create-person.dto';
import { UpdatePersonDto } from './update-person.dto';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  findAll() {
    return this.personRepository.find();
  }

  async findOne(id: string) {
    const person = await this.personRepository.findOne(id);
    if (!person) {
      throw new NotFoundException('person with ${id} not found');
    }
    return person;
  }

  create(createPersonDto: CreatePersonDto) {
    const person = this.personRepository.create(createPersonDto);
    return this.personRepository.save(person);
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    const person = await this.personRepository.preload({
      id: +id,
      ...updatePersonDto,
    });
    if (!person) {
      throw new NotFoundException('person with this ID not found');
    }
    return this.personRepository.save(person);
  }

  async remove(id: string) {
    const person = await this.findOne(id);
    return this.personRepository.remove(person);
  }
}
