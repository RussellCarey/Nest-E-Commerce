// item.entity.ts
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Product } from './product.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  //
  @Column({ type: 'varchar', length: 100 })
  product_name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 300 })
  image: string;

  @Column({ type: 'float' })
  amount: number;

  @Column({ type: 'int' })
  discount_percent: number;

  @OneToMany(() => Product, (product) => product)
  products: Product[];
}
