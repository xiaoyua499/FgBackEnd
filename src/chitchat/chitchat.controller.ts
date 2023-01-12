import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { query } from 'express';
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
  @ApiBearerAuth() // swagger文档设置token
  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async createChitchai(@Body() chitchatDto: ChitchatDto) {
    return this.chitchatService.createChitchai(chitchatDto);
  }

  @ApiOperation({ summary: '获取顾客信息' })
  @ApiBearerAuth() // swagger文档设置token
  @UseGuards(AuthGuard('jwt'))
  @Get('chitchatInfo')
  async findAll(@Query() query: { customerId: string,userId:string }) {
    // console.log(query.sendId,query.acceptId);
    return this.chitchatService.findAll(query)
  }
}
