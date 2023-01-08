import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CustomerRegisterDTO {
  @ApiProperty({
    description: '顾客昵称',
    example: '小黑子'
  })
  @IsNotEmpty({ message: '请输入顾客昵称' })
  @IsString({ message: '顾客昵称必须是 String 类型' })
  readonly customerNickName: string

}