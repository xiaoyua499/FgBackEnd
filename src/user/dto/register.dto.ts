import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches } from "class-validator"

export class RegisterDTO {
  @ApiProperty({
    description: '手机号，唯一',
    example: '13049153466'
  })
  @IsNotEmpty({ message: '请输入手机号' })
  readonly mobile: string;

  @ApiProperty({
    description: '邮箱。唯一',
    example: '123456@qq.com'
  })
  @IsNotEmpty({ message: '请输入邮箱' })
  readonly email: string;

  @ApiProperty({
    description: '用户名',
    example: 'admin'
  })
  @IsNotEmpty({ message: '请输入用户昵称' })
  @IsString({ message: '名字必须是 String 类型' })
  readonly nickname: string;

  @ApiProperty({
    description: '用户密码',
    example: '123456',
  })
  @IsNotEmpty({ message: '请输入密码' })
  readonly password: string;

  @ApiProperty({
    description: '二次输入密码',
    example: '123456'
  })
  @IsNotEmpty({ message: '请再次输入密码' })
  readonly passwordRepeat: string
}