import { Injectable } from '@nestjs/common';
import { Pet } from './pets.entity';

@Injectable()
export class PetsService {
    async findAll() : Promise<Pet[]> {
        const pet = new Pet();
        pet.id = 1;
        pet.name = 'miu miu';
        return [pet]
    }
}
