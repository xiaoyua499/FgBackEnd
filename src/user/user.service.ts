import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encryptPassword, makeSalt } from 'src/utils/cryptogram.util';
import { Repository } from 'typeorm';
import { LoginDTO } from '../auth/dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { User } from './entities/user.entity';
import { TokenVO } from '../auth/vo/token.vo';


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  // 校验注册信息
  async checkRegisterForm(
    registerDTO: RegisterDTO,
  ): Promise<any> {
    if (registerDTO.password !== registerDTO.passwordRepeat) {
      throw new NotFoundException('两次输入的密码不一致，请检查')
    }
    const { mobile, email } = registerDTO
    const hasUser = await this.userRepository
      .createQueryBuilder('user')
      .where('user.mobile = :mobile', { mobile })
      .where('user.email = :email', { email })
      .getOne()
    if (hasUser) {
      throw new NotFoundException('用户已存在')
    }
  }

  // 注册
  async register(
    registerDTO: RegisterDTO
  ): Promise<any> {

    await this.checkRegisterForm(registerDTO)

    const { nickname, password, mobile, email } = registerDTO;
    const salt = makeSalt(); // 制作密码盐
    const hashPassword = encryptPassword(password, salt);  // 加密密码

    const newUser: User = new User()
    newUser.nickname = nickname
    newUser.mobile = mobile
    newUser.email = email
    newUser.password = hashPassword
    newUser.salt = salt
    const result = await this.userRepository.save(newUser)
    delete result.password
    delete result.salt
    return {
      info: result
    }
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id }
    });
    return user;
  }

  allowLogin(){
    return '允许登录'
  }
}