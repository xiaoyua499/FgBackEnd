import { Module } from '@nestjs/common';
import { ChitchatService } from './chitchat.service';
import { ChitchatController } from './chitchat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chitchat } from './entities/chitchat.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Chitchat]),
  ],
  controllers: [ChitchatController],
  providers: [ChitchatService]
})
export class ChitchatModule {}
