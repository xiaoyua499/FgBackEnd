import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CustomerDTO {
  @ApiProperty({
    description: '顾客id',
    example: '8b0a7966-cdd6-4e75-9244-79deea9a33b3'
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
    example: false
  })
  readonly isShopping: boolean

  @ApiProperty({
    description: '是否付款',
    example: false
  })
  readonly isPay: boolean

  @ApiProperty({
    description: '是否标星',
    example: false
  })
  readonly isStar: boolean

  @ApiProperty({
    description: '标星颜色',
    example: 1
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