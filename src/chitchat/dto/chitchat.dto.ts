import { ApiProperty } from "@nestjs/swagger";

export class CreateChitchatDto {
  @ApiProperty({
    description: '用户id'
  })
  readonly userId: string

  @ApiProperty({
    description: '顾客id'
  })
  readonly customerId: string

  @ApiProperty({
    description: '发送内容',
    default: '多长时间发货'
  })
  readonly content: string

  @ApiProperty({
    description: '内容属性',
    default: 0
  })
  readonly contentAttribute: number

  @ApiProperty({
    description: '消息状态',
    default: false
  })
  readonly MessageStatus: boolean

}
