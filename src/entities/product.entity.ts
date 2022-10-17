// item.entity.ts
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity({ name: 'product' })
export class Product extends BaseEntity {
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

  @ManyToOne(() => User, (user) => user.products)
  user: User;
}
