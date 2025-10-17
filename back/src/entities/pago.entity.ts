import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './orders.entity';

@Entity({ name: 'pagos' })
export class Pago {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @OneToOne(() => Order, (order) => order.pago)
  order: Order;

  @Column({ type: 'varchar', length: 50 })
  paymentMethod: string;

  @Column({ type: 'decimal' })
  amount: number;

  @Column({ type: 'date' })
  paymentDate: Date;

  @Column({ type: 'varchar', length: 50 })
  paymentStatus: string;
}
