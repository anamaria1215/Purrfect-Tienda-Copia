import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD

// Módulos de tus entidades

=======
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Credential } from './entities/credential.entity';
import { Product } from './entities/product.entity';
import { Category } from './entities/categories.entity';
import { Order } from './entities/orders.entity';
import { OrderDetail } from './entities/orders_detail.entity';
import { Cart } from './entities/carrito.entity';
import { CartProduct } from './entities/carrito_producto.entity';
import { Payment } from './entities/pago.entity';
import { OrderProduct } from './entities/pedido_producto.entity';
>>>>>>> fb635f87c4c86b034174f4085691feb1de02677b

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('typeorm') ?? {},
    }),
    TypeOrmModule.forFeature([
      User,
      Credential,
      Product,
      Category,
      Order,
      OrderDetail,
      Cart,
      CartProduct,
      Payment,
      OrderProduct,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
