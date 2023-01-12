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
    const { sendId, message, contentAttribute, MessageStatus, acceptId, customerId } = chitchatDto
    const newChitchai: Chitchat = new Chitchat()
    newChitchai.sendId = sendId
    newChitchai.message = message
    newChitchai.contentAttribute = contentAttribute
    newChitchai.MessageStatus = MessageStatus
    newChitchai.acceptId = acceptId
    newChitchai.customerId = customerId
    const result = await this.chitchatRepository.save(newChitchai)
    console.log(result);
    return {
      info: result
    }
  }

  //查找聊天
  async findAll(query: { customerId: string, userId: string }): Promise<any> {
    const chitchai = await this.chitchatRepository.find({
      where: { customerId: query.customerId, userId: query.userId }
    })
    console.log(chitchai);
    return chitchai
  }
}
