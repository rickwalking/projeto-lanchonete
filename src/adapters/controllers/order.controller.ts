import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger'; // Importe os decoradores do Swagger
import { CreateOrderDTO } from 'src/application/dtos/create-order.dto';
import { UpdateOrderProductsDTO } from 'src/application/dtos/update-order.dto';
import { CreateOrderUseCase } from 'src/application/usecases/create-order.usecase';
import { CreatePaymentOrderUseCase } from 'src/application/usecases/create-payment-order.usecase';
import { GetPaymentOrderUseCase } from 'src/application/usecases/get-payment-order.usecase';
import { UpdateOrderStatusDeliveredUseCase } from 'src/application/usecases/update-order-status-delivered.usecase';
import { UpdateOrderStatusPreparationUseCase } from 'src/application/usecases/update-order-status-preparation.usecase';
import { UpdateOrderStatusReadyUseCase } from 'src/application/usecases/update-order-status-ready.usecase';
import { UpdateProductsUseCase } from 'src/application/usecases/update-product.usecase';
import { GetQueueOrderUseCase } from 'src/application/usecases/get-queue.usecase';

@ApiTags('Pedido')
@Controller('v1/order')
export class OrderController {
  constructor(
    private readonly createOrderUseCase: CreateOrderUseCase,
    private readonly createPaymentOrderUseCase: CreatePaymentOrderUseCase,
    private readonly getPaymentOrderUseCase: GetPaymentOrderUseCase,
    private readonly updateOrderStatusReadyUseCase: UpdateOrderStatusReadyUseCase,
    private readonly updateOrderStatusPreparationUseCase: UpdateOrderStatusPreparationUseCase,
    private readonly updateOrderStatusDeliveredUseCase: UpdateOrderStatusDeliveredUseCase,
    private readonly updateProductsUseCase: UpdateProductsUseCase,
    private readonly getQueueOrderUseCase: GetQueueOrderUseCase
  ) {}

  @Post('')
  @ApiOperation({ summary: 'Cria um novo pedido' })
  async createOrder(@Body() data: CreateOrderDTO) {
    return await this.createOrderUseCase.execute(data);
  }

  @Get(':order_id')
  @ApiOperation({ summary: 'Obtém um pedido pelo ID' })
  @ApiParam({ name: 'order_id', type: 'string' })
  async getOrder(@Param('order_id') order_id: string) {
    return await this.getPaymentOrderUseCase.execute(Number(order_id));
  }

  @Post('payment/:order_id')
  @ApiOperation({ summary: 'Realiza o pagamento de um pedido' })
  @ApiParam({ name: 'order_id', type: 'string' })
  async paymentOrder(@Param('order_id') order_id: string) {
    return await this.createPaymentOrderUseCase.execute(Number(order_id));
  }

  @Put('preparation/:order_id')
  @ApiOperation({ summary: 'Inicia a preparação de um pedido' })
  @ApiParam({ name: 'order_id', type: 'string' })
  async startPreparationOrder(@Param('order_id') order_id: string) {
    return await this.updateOrderStatusPreparationUseCase.execute(Number(order_id));
  }

  @Put('ready/:order_id')
  @ApiOperation({ summary: 'Marca um pedido como pronto' })
  @ApiParam({ name: 'order_id', type: 'string' })
  async markAsReadyOrder(@Param('order_id') order_id: string) {
    return await this.updateOrderStatusReadyUseCase.execute(Number(order_id));
  }

  @Put('delivered/:order_id')
  @ApiOperation({ summary: 'Marca um pedido como entregue' })
  @ApiParam({ name: 'order_id', type: 'string' })
  async markAsDeliveredOrder(@Param('order_id') order_id: string) {
    return await this.updateOrderStatusDeliveredUseCase.execute(Number(order_id));
  }

  @Put('product/:order_id')
  @ApiOperation({ summary: 'Atualiza produtos em um pedido' })
  @ApiParam({ name: 'order_id', type: 'string' })
  async updateProductsOrder(
    @Param('order_id') order_id: string,
    @Body() data: Partial<UpdateOrderProductsDTO>,
  ) {
    return await this.updateProductsUseCase.execute({ id: Number(order_id), data });
  }

  @Get('queue')
  @ApiOperation({ summary: 'Obtém a fila de pedidos' })
  async queueOfOrders() {
    return await this.getQueueOrderUseCase.execute();
  }
}
