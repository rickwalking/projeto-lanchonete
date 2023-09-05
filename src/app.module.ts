import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { OrderController } from './adapters/controllers/order.controller';
import { ProductController } from './adapters/controllers/product.controller';
import { UserController } from './adapters/controllers/user.controller';
import { OrderService } from './application/services/order.service';
import { ProductService } from './application/services/product.service';
import { UserService } from './application/services/user.service';
import { CreateUserUseCase } from './application/usecases/create-user.usecase';
import { GetAllUserUseCase } from './application/usecases/get--all-user.usecase';
import { GetUserUseCase } from './application/usecases/get-user.usecase';
import { UpdateUserUseCase } from './application/usecases/update-user.usecase';
import { DeleteUserUseCase } from './application/usecases/delete-user.usecase';
import { CreateProductUseCase } from './application/usecases/create-product.usecase';
import { GetProductUseCase } from './application/usecases/get-product.usecase';
import { GetAllProductUseCase } from './application/usecases/get--all-product.usecase';
import { DeleteProductUseCase } from './application/usecases/delete-product.usecase';
import { UserRepository } from './adapters/database/repositories/user.repository';
import { ProductRepository } from './adapters/database/repositories/product.repository';
import { OrderRepository } from './adapters/database/repositories/order.repository';
import { CategoryRepository } from './adapters/database/repositories/category.repository';
import { PrismaHelper } from './adapters/database/helpers/prisma.helper';
import { CategoryController } from './adapters/controllers/category.controller';
import { CreateCategoryUseCase } from './application/usecases/create-category.usecase';
import { GetAllCategoryUseCase } from './application/usecases/get--all-category.usecase';
import { GetCategoryUseCase } from './application/usecases/get-category.usecase';
import { UpdateCategoryUseCase } from './application/usecases/update-category.usecase';
import { DeleteCategoryUseCase } from './application/usecases/delete-category.usecase';
import { CategoryService } from './application/services/category.service';
import { UpdateProductsUseCase } from './application/usecases/update-product.usecase';
import { GetPaymentOrderUseCase } from './application/usecases/get-payment-order.usecase';
import { CreatePaymentOrderUseCase } from './application/usecases/create-payment-order.usecase';
import { GetQueueOrderUseCase } from './application/usecases/get-queue.usecase';
import { MercadoPagoProvider } from './adapters/providers/mercadopago.provider';
import { PaymentRepository } from './adapters/database/repositories/payment.repository';
import { PaymentService } from './application/services/payment.service';
import { CreateOrderUseCase } from './application/usecases/create-order.usecase';
import { UpdateOrderStatusReadyUseCase } from './application/usecases/update-order-status-ready.usecase';
import { UpdateOrderStatusPreparationUseCase } from './application/usecases/update-order-status-preparation.usecase';
import { UpdateOrderStatusDeliveredUseCase } from './application/usecases/update-order-status-delivered.usecase';

@Module({
  imports: [],
  controllers: [
    OrderController,
    ProductController,
    UserController,
    CategoryController,
  ],
  providers: [
    PaymentService,
    OrderService,
    ProductService,
    UserService,
    CategoryService,
    CreateUserUseCase,
    GetAllUserUseCase,
    GetUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    CreateProductUseCase,
    GetAllProductUseCase,
    GetProductUseCase,
    UpdateProductsUseCase,
    DeleteProductUseCase,
    CreateCategoryUseCase,
    GetAllCategoryUseCase,
    GetCategoryUseCase,
    UpdateCategoryUseCase,
    DeleteCategoryUseCase,
    GetPaymentOrderUseCase,
    CreatePaymentOrderUseCase,
    GetQueueOrderUseCase,
    CreateOrderUseCase,
    UpdateOrderStatusReadyUseCase,
    UpdateOrderStatusPreparationUseCase,
    UpdateOrderStatusDeliveredUseCase,
    {
      provide: 'UserRepository',
      useClass: UserRepository,
    },
    {
      provide: 'OrderRepository',
      useClass: OrderRepository,
    },
    {
      provide: 'ProductRepository',
      useClass: ProductRepository,
    },
    {
      provide: 'CategoryRepository',
      useClass: CategoryRepository,
    },
    {
      provide: 'PaymentRepository',
      useClass: PaymentRepository,
    },
    {
      provide: 'PaymentProvider',
      useClass: MercadoPagoProvider
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    PrismaHelper
  ],
})
export class AppModule {}
