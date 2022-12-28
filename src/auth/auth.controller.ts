import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { TokenResponse } from '../auth/vo/token.vo';
import { UserService } from '../user/user.service';
@ApiTags("用户登录")
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }
  @ApiOperation({ summary: '登录' })
  @ApiBody({ type: LoginDTO })
  @ApiOkResponse({ description: '登陆', type: TokenResponse })
  @Post('login')
  async login(
    @Body() loginDTO: LoginDTO
  ): Promise<any> {
    return this.authService.login(loginDTO)
  }

  @ApiOperation({ summary: '获取用户信息' })
  @ApiBearerAuth() // swagger文档设置token
  @UseGuards(AuthGuard('jwt'))
  @Get('info')
  async findOne(@Req() req) {
    return this.userService.findOne(req.user.id)
  }
}
