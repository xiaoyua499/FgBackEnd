import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChitchatDto } from './dto/chitchat.dto';
import { Chitchat } from './entities/chitchat.entity';

@Injectable()
export class ChitchatService {
  constructor(
    @InjectRepository(Chitchat) 
    private readonly chitchatRepository: Repository<Chitchat>
  ) { }

  //创建消息  
  async createChitchai(chitchatDto: ChitchatDto): Promise<any> {
    const { sendId, message, contentAttribute, MessageStatus } = chitchatDto
    const newChitchai: Chitchat = new Chitchat()
    newChitchai.sendId = sendId
    newChitchai.message = message
    newChitchai.contentAttribute = contentAttribute
    newChitchai.MessageStatus = MessageStatus 
    const result = await this.chitchatRepository.save(newChitchai)
    console.log(result);
    
    return {
      info: result
    }
    
  }
}
