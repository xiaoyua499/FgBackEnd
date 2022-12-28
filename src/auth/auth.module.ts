import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';

const jwtModule = JwtModule.registerAsync({
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return {
      secret: configService.get('SECRET', 'xya499'), // 密钥
      signOptions: { expiresIn: '4h' }, // token 过期时效
    }
  }
})
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    jwtModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UserService],
  exports:[jwtModule]
})
export class AuthModule { }
