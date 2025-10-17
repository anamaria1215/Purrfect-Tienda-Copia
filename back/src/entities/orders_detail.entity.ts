import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Carrito } from './carrito.entity';
import { Product } from './product.entity';

@Entity({ name: 'carrito_productos' })
export class CarritoProducto {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @ManyToOne(() => Carrito, (carrito) => carrito.carritoProductos)
  carrito: Carrito;

  @ManyToOne(() => Product, (product) => product.carritoProductos)
  product: Product;

  @Column({ type: 'int' })
  quantity: number;
}
