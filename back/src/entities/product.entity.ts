import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CarritoProducto } from './carrito_producto.entity';
import { PedidoProducto } from './pedido_producto.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'varchar', length: 50 })
  category: string;

  @OneToMany(() => CarritoProducto, (cp) => cp.product)
  carritoProductos: CarritoProducto[];

  @OneToMany(() => PedidoProducto, (pp) => pp.product)
  pedidoProductos: PedidoProducto[];
}
