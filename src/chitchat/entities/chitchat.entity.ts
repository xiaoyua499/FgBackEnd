import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Chitchat {
  //id
  @PrimaryGeneratedColumn('uuid')
  chitchatid: string

  //发送者id
  @Column({
    default: 'ce3835ec-626d-48ef-90c6-2b8771c4878d'
  })
  sendId: string

  //发送内容
  @Column({
    default: '多长时间发货'
  })
  message: string

  //内容属性
  @Column({
    default: 0
  })
  contentAttribute: number

  //发送时间
  @CreateDateColumn({
    type: 'timestamp',
    name: 'sendTime',
    comment: '发送时间',
  })
  sendTime: Date

  //消息状态
  @Column({
    default: false
  })
  MessageStatus: boolean
}
