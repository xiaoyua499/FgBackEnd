import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Matches } from "class-validator"

export class LoginDTO {
  // @ApiProperty({
  //   description: '手机号，唯一',
  //   example: '13049153466'
  // })
  // @IsNotEmpty({ message: '请输入手机号' })
  // readonly mobile: string;

  @ApiProperty({
    description: '邮箱',
    example: '123456@qq.com'
  })
  @IsNotEmpty({ message: '请输入邮箱' })
  readonly email: string;

  @ApiProperty({
    description: '用户密码',
    example: '123456',
  })
  @IsNotEmpty({ message: '请输入密码' })
  readonly password: string;
}