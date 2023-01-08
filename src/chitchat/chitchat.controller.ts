import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChitchatService } from './chitchat.service';
import { CreateChitchatDto } from './dto/chitchat.dto';

@Controller('chitchat')
export class ChitchatController {
  constructor(private readonly chitchatService: ChitchatService) {}

  @Post()
  create(@Body() createChitchatDto: CreateChitchatDto) {
    return this.chitchatService.create(createChitchatDto);
  }

  @Get()
  findAll() {
    return this.chitchatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chitchatService.findOne(+id);
  }

}
