import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ChitchatDto {
  @ApiProperty({
    description: '发送者id',
    example: 'ce3835ec-626d-48ef-90c6-2b8771c4878d'
  })
  @IsNotEmpty({ message: '请输入发送者id' })
  readonly sendId: string

  @ApiProperty({
    description: '接受着id',
    example: '2433752c-8bce-41c6-aa61-6c94f9b2dfd4'
  })
  @IsNotEmpty({ message: '请输入发送者id' })
  readonly acceptId: string
  @ApiProperty({
    description: '顾客id',
    example: '2433752c-8bce-41c6-aa61-6c94f9b2dfd4'
  })
  @IsNotEmpty({ message: '请输入发送者id' })
  readonly customerId: string
  @ApiProperty({
    description: '用户id',
    example: 'ce3835ec-626d-48ef-90c6-2b8771c4878d'
  })
  @IsNotEmpty({ message: '请输入发送者id' })
  readonly userId: string

  @ApiProperty({
    description: '发送内容',
    example: '多长时间发货'
  })
  @IsNotEmpty({ message: '请输入发送内容' })

  readonly message: string

  @ApiProperty({
    description: '内容属性',
    example: 0
  })
  @IsNotEmpty({ message: '请输入内容属性' })

  readonly contentAttribute: number

  @ApiProperty({
    description: '消息状态',
    example: false
  })
  @IsNotEmpty({ message: '请输入消息状态' })
  readonly MessageStatus: boolean

}
