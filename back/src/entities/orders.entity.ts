import { Column, Entity, ManyToOne, OneToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { User } from './users.entity';
import { PedidoProducto } from './pedido_producto.entity';
import { Pago } from './pago.entity';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @Column({ type: 'date' })
  orderDate: Date;

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @Column({ type: 'decimal' })
  total: number;

  @OneToMany(() => PedidoProducto, (pp) => pp.order)
  pedidoProductos: PedidoProducto[];

  @OneToOne(() => Pago, (pago) => pago.order)
  @JoinColumn()
  pago: Pago;
}
