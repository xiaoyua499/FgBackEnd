import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CustomerDTO {
  @ApiProperty({
    description: '顾客id',
    example: '2433752c-8bce-41c6-aa61-6c94f9b2dfd4'
  })
  @IsNotEmpty({ message: '请输入顾客id' })
  readonly customerId: string

  @ApiProperty({
    description: '接待状态',
    example: false
  })
  isReceive: boolean

  @ApiProperty({
    description: '是否下单',
    example: true
  })
  readonly isShopping: boolean

  @ApiProperty({
    description: '是否付款',
    example: false
  })
  readonly isPay: boolean

  @ApiProperty({
    description: '是否标星',
    example: true
  })
  readonly isStar: boolean

  @ApiProperty({
    description: '标星颜色',
    example: '#669eff'
  })
  readonly starColor: string

  @ApiProperty({
    description: '是否结束会话',
    example: false
  })
  readonly isEnd: boolean

  @ApiProperty({
    description: '最近消息',
    example: '用户超时未回复，系统关闭会话'
  })
  readonly RecentNews: string

  @ApiProperty({
    description: '是否为最近联系人',
    example: true
  })
  readonly isRecently: boolean
}