import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { CustomerDTO } from './dto/customer.dto'
import { CustomerRegisterDTO } from './dto/customerRegister.dto'
import { CustomerInfoResponse } from './vo/customer-info.vo';

@ApiTags("顾客")
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) { }
  @ApiOperation({ summary: '注册' })
  @ApiBody({ type: CustomerRegisterDTO })
  @ApiOkResponse({ description: '注册', type: CustomerInfoResponse })
  @Post('register')
  async register(
    @Body() customerRegisterDTO: CustomerRegisterDTO
  ): Promise<any> {
    return this.customerService.register(customerRegisterDTO)
  }

  @ApiOperation({ summary: '获取顾客信息' })
  @ApiBearerAuth() // swagger文档设置token
  @UseGuards(AuthGuard('jwt'))
  @Get('customerInfo')
  async findAll(@Req() req) {
    return this.customerService.findAll(req.userId)
  }

  @ApiOperation({ summary: '更新顾客信息' })
  @ApiBearerAuth() // swagger文档设置token
  @UseGuards(AuthGuard('jwt'))
  @Patch('updata')
  update(@Body() customerDTO: CustomerDTO) {
    return this.customerService.updataCustomer(customerDTO.customerId, customerDTO);
  }
}
