import { BeforeInsert, BeforeRecover, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

const bcrypt = require('bcryptjs')

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column({ length: 100 })
  username: string //用户名

  @Column({ select: false })
  password: string //密码

  @Column()
  phone: number //手机号码

  @Column()
  email: string //邮箱

  @Column()
  avatar: string //头像

  @Column({
    name: 'create_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date //创建时间

  @Column({
    name: 'update_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateTime: Date

  @BeforeInsert()
  async encrptPwd() {
    this.password = await bcrypt.hashSync(this.password)
  }
}
