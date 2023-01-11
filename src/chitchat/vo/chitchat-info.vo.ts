import { ApiProperty } from "@nestjs/swagger";
export class ChaichatInfoItem {
  @ApiProperty({ description: '用户id', example: 1 })
  id: number;

  @ApiProperty({ description: '创建时间', example: '2021-07-21' })
  createTime: Date
}

export class ChaichatInfoVO {
  @ApiProperty({ type: ChaichatInfoItem })
  info: ChaichatInfoItem
}

export class ChaichatInfoResponse {   
  @ApiProperty({ description: '状态码', example: 201, })
  code: number

  @ApiProperty({
    description: '数据',
    type: () => ChaichatInfoVO, example: ChaichatInfoVO,
  })
  data: ChaichatInfoVO

  @ApiProperty({ description: '请求结果信息', example: '请求成功' })
  message: string
} 