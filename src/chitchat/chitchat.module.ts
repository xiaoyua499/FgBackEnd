import { Module } from '@nestjs/common';
import { ChitchatService } from './chitchat.service';
import { ChitchatController } from './chitchat.controller';

@Module({
  controllers: [ChitchatController],
  providers: [ChitchatService]
})
export class ChitchatModule {}
