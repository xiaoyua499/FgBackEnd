import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Customer {
  //用户id
  @Column({
    default: 'ce3835ec-626d-48ef-90c6-2b8771c4878d'
  })
  userId: string

  //顾客id
  @PrimaryGeneratedColumn('uuid')
  customerId: string

  //顾客昵称
  @Column('text')
  customerNickName: string

  //顾客头像地址
  @Column({
    default: '/src/assets/头像.jpg'
  })
  headImg: string

  //创建时间
  @CreateDateColumn(
    {
      type: 'timestamp',
      name: 'createTime',
      comment: '创建时间',
    }
  )
  createTime: Date

  //最近会话时间
  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updateTime',
    comment: '最后更新时间',
  })
  updateTime: Date

  //接待状态
  @Column({
    default: false
  })
  isReceive: boolean

  //是否下单
  @Column({
    default: false
  })
  isShopping: boolean

  //是否付款
  @Column({
    default: false
  })
  isPay: boolean

  //是否标星
  @Column({
    default: false
  })
  isStar: boolean

  //标星颜色
  @Column({
    default: '#ccc'
  })
  starColor: string

  //是否结束会话
  @Column({
    default: false
  })
  isEnd: boolean

  //最近消息
  @Column({
    default: '用户超时未回复，系统关闭会话'
  })
  RecentNews: string

  //是否为最近联系人
  @Column({
    default: true
  })
  isRecently: boolean
}
