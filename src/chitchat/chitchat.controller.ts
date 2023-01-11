import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ChitchatService } from './chitchat.service';
import { ChitchatDto } from './dto/chitchat.dto';
import { ChaichatInfoResponse } from './vo/chitchat-info.vo';

@ApiTags("消息")
@Controller('chitchat')
export class ChitchatController {
  constructor(private chitchatService: ChitchatService) {}

  @ApiOperation({ summary: '创建信息' })
  @ApiBody({ type: ChitchatDto })
  @ApiOkResponse({ description: '创建信息', type: ChaichatInfoResponse })
  @Post('create')
  async createChitchai(@Body() chitchatDto: ChitchatDto) {
    return this.chitchatService.createChitchai(chitchatDto);
  }
}
