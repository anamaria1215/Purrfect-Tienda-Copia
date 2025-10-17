import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './orders.entity';
import { Product } from './product.entity';

@Entity({ name: 'pedido_productos' })
export class PedidoProducto {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @ManyToOne(() => Order, (order) => order.pedidoProductos)
  order: Order;

  @ManyToOne(() => Product, (product) => product.pedidoProductos)
  product: Product;

  @Column({ type: 'int' })
  quantity: number;
}
