import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDTO } from '../auth/dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { UserService } from './user.service';

import { UserInfoResponse } from '../auth/vo/user-info.vo';
@ApiTags("用户注册")
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) { }
  @ApiOperation({ summary: '注册' })
  @ApiBody({ type: RegisterDTO })
  @ApiOkResponse({ description: '注册', type: UserInfoResponse })
  @Post('register')
  async register(
    @Body() registerDTO: RegisterDTO
  ): Promise<UserInfoResponse> {
    return this.userService.register(registerDTO)
  }
}