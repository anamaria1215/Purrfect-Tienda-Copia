import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Módulos de configuración y TypeORM
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entidades
import { User } from './entities/users.entity';
import { Credential } from './entities/credential.entity';
import { Product } from './entities/product.entity';
import { Category } from './entities/categories.entity';
import { Order } from './entities/orders.entity';
import { Carrito } from './entities/carrito.entity';
import { CarritoProducto } from './entities/carrito_producto.entity';
import { Pago } from './entities/pago.entity';
import { PedidoProducto } from './entities/pedido_producto.entity';

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
      Carrito,
      CarritoProducto,
      Pago,
      PedidoProducto,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
