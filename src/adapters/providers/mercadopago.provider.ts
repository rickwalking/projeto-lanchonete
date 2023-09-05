import {
  Injectable,
  InternalServerErrorException,
  OnModuleInit,
} from '@nestjs/common';
import mercadopago from 'mercadopago';
import { IPaymentProvider } from 'src/application/interfaces/payment.provider.interface';

@Injectable()
export class MercadoPagoProvider implements IPaymentProvider, OnModuleInit {
  protected access_token =
    process.env.NODE_ENV == 'production'
      ? process.env.MP_ACCESS_TOKEN_PRD
      : process.env.MP_ACCESS_TOKEN_HMG;
  protected mercadopago = mercadopago;

  onModuleInit() {
    this.mercadopago?.configurations.setAccessToken(this.access_token);
  }

  async create(
    order_id: number,
    value: number,
    email: string,
  ): Promise<Partial<Payment.Create.Response>> {
    const payment_data = {
      transaction_amount: value,
      payment_method_id: 'pix',
      payer: {
        email: email,
      },
      installments: 1,
      notification_url: `${process.env.BASE_URL}/v1/order/preparation/${order_id}`
    };
    try {
      return await mercadopago.payment.create(payment_data);
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado.');
    }
  }

  async get(id: number): Promise<Partial<Payment.Get.Response>> {
    try {
      return await mercadopago.payment.get(id);
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado.');
    }
  }
}
