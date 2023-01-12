import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerDTO } from './dto/customer.dto'
import { CustomerRegisterDTO } from './dto/customerRegister.dto'
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) { }

  //校验注册信息
  async checkRegisterForm(customerRegisterDTO: CustomerRegisterDTO): Promise<any> {
    const { customerNickName } = customerRegisterDTO
    const hasCustomer = await this.customerRepository
      .createQueryBuilder('customer')
      .where('customer.customerNickName=:customerNickName', { customerNickName })
      .getOne()
    if (hasCustomer) {
      throw new NotFoundException('顾客已存在')
    }
  }

  //顾客注册
  async register(customerRegisterDTO: CustomerRegisterDTO): Promise<any> {
    await this.checkRegisterForm(customerRegisterDTO)
    const { customerNickName } = customerRegisterDTO

    const newCusromer: Customer = new Customer()
    newCusromer.customerNickName = customerNickName
    const result = await this.customerRepository.save(newCusromer)
    return {
      info: result
    }
  }

  //查找顾客
  async findAll(query: { userId: string }): Promise<any> {
    const customer = await this.customerRepository.find({
      where: { userId: query.userId }
    })
    // console.log(customer);
    return customer
  }

  //更新顾客信息
  async updataCustomer(customerId: string, customerDTO: CustomerDTO) {
    await this.customerRepository.update(customerId, customerDTO)
    // console.log('customer', customerDTO);
    return customerDTO
  }


}
