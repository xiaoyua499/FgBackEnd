import { Column, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export class Chitchat {
  //id
  @PrimaryGeneratedColumn('uuid')
  id: number

  //用户id
  @Column('text')
  userId: string

  //顾客id
  @Column('text')
  customerId: string
  
  //发送内容
  @Column('text')
  content:string

  //内容属性
  @Column({
    type:'number',
    default:0
  })
  contentAttribute:number

  //发送时间
  @UpdateDateColumn()
  sendTime:Date

  //消息状态
  @Column({
    default:false
  })
  MessageStatus:boolean
}
