import { Injectable } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { PaymentService } from '../services/payment.service';

@Injectable()
export class GetPaymentOrderUseCase {
  constructor(
    private readonly orderService: OrderService,
    private readonly paymentService: PaymentService,
    ) {}

  async execute(id: number) {
    const order = await this.orderService.findOne(id)

    const all_products = order.produtos.flatMap(product => {
        return Number(product.preco) * (!product.quantidade ? 1 : product.quantidade)
    })

    const payment = await this.paymentService.getPayment(Number(order.pedido_id))
  
    return { ...order, pagamento: payment, total_produtos: all_products.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
  }
}
