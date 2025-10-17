import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './users.entity';
import { CarritoProducto } from './carrito_producto.entity';

@Entity({ name: 'carritos' })
export class Carrito {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @ManyToOne(() => User, (user) => user.carritos)
  user: User;

  @Column({ type: 'date' })
  creationDate: Date;

  @OneToMany(() => CarritoProducto, (cp) => cp.carrito)
  carritoProductos: CarritoProducto[];
}
