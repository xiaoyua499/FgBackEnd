import { ApiProperty } from "@nestjs/swagger";
export class CustomerInfoItem {
  @ApiProperty({ description: '用户id', example: 1 })
  id: number;

  @ApiProperty({ description: '创建时间', example: '2021-07-21' })
  createTime: Date

  @ApiProperty({ description: '更新时间', example: '2021-07-21' })
  updateTime: Date
}

export class CustomerInfoVO {
  @ApiProperty({ type: CustomerInfoItem })
  info: CustomerInfoItem
}

export class CustomerInfoResponse {   
  @ApiProperty({ description: '状态码', example: 201, })
  code: number

  @ApiProperty({
    description: '数据',
    type: () => CustomerInfoVO, example: CustomerInfoVO,
  })
  data: CustomerInfoVO

  @ApiProperty({ description: '请求结果信息', example: '请求成功' })
  message: string
} 