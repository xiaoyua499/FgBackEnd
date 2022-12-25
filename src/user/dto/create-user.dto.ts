import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
  @ApiProperty({
    name: "username",
    default: "admin"
  })
  username: string

  @ApiProperty({
    name: "password",
    default: "123456789"
  })
  password: string

  @ApiProperty({
    name: "phone", //手机号码
  })
  phone: number | null
  @ApiProperty({
    name: "email",
    default: ""
  })
  email: string | null//邮箱

  @ApiProperty({
    name: "avatar",
    default: ""
  })
  avatar: string | null //头像
}
