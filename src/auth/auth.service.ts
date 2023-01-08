import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { encryptPassword } from 'src/utils/cryptogram.util';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) { }
  // 登陆校验用户信息
  async checkLoginForm(
    loginDTO: LoginDTO
  ): Promise<any> {
    const {  password, email } = loginDTO
    const user = await this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.salt')
      .addSelect('user.password')
      // .where('user.mobile = :mobile', { mobile })
      .where('user.email = :email', { email })
      .getOne()

    console.log({ user })

    if (!user) {
      throw new NotFoundException('用户不存在')
    }
    const { password: dbPassword, salt } = user
    const currentHashPassword = encryptPassword(password, salt);
    console.log({ currentHashPassword, dbPassword })
    if (currentHashPassword !== dbPassword) {
      throw new NotFoundException('密码错误')
    }
    return user
  }

  // 生成 token
  async certificate(user: User) {
    const payload = {
      id: user.id,
      nickname: user.nickname,
      mobile: user.mobile,
    };
    const token = this.jwtService.sign(payload);
    return token
  }

  async login(
    loginDTO: LoginDTO
  ): Promise<any> {
    const user = await this.checkLoginForm(loginDTO)
    const token = await this.certificate(user)
    return {
      info: {
        token
      }
    }
  }

}
