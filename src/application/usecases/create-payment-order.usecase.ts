import { Injectable } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { PaymentService } from '../services/payment.service';
import { UserService } from '../services/user.service';

@Injectable()
export class CreatePaymentOrderUseCase {
  constructor(
    private readonly orderService: OrderService,
    private readonly paymentService: PaymentService,
    private readonly userService: UserService
    ) {}

  async execute(id: number) {
    const { usuario_id, produtos } = await this.orderService.findOne(id)

    const all_products = produtos.flatMap(product => {
        return Number(product.preco) * (!product.quantidade ? 1 : product.quantidade)
    })

    const { email } = await this.userService.findOne(usuario_id)
    return await this.paymentService.createPayment(id, all_products.reduce((accumulator, currentValue) => accumulator + currentValue, 0), email)
  }
}
