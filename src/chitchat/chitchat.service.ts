import { Injectable } from '@nestjs/common';
import { CreateChitchatDto } from './dto/chitchat.dto';

@Injectable()
export class ChitchatService {
  create(createChitchatDto: CreateChitchatDto) {
    return 'This action adds a new chitchat';
  }

  findAll() {
    return `This action returns all chitchat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chitchat`;
  }


  remove(id: number) {
    return `This action removes a #${id} chitchat`;
  }
}
