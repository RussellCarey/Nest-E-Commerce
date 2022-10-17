// item.entity.ts
import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from '../Users/user.entity';
import { Product } from './product.entity';

@Entity({ name: 'product_comments' })
export class ProductComments extends BaseEntity {
  //
  @Column({ type: 'varchar', length: 1000 })
  comment: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User[];

  @OneToMany(() => Product, (product) => product.id)
  product: Product;
}
