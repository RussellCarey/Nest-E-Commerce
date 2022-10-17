// item.entity.ts
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from '../Users/user.entity';
import { ProductCategory } from './productcategory.entity';
import { ProductComments } from './productcomments.entity';

//TODO - Likes and comments?

@Entity({ name: 'products' })
export class Product extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  product_name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 300 })
  image: string;

  @Column({ type: 'float' })
  amount: number;

  @Column({ type: 'int' })
  dicount_percent: number;

  @Column({ type: 'int' })
  view_count: number;

  @OneToMany(() => ProductCategory, (category) => category.id)
  category: ProductCategory;

  @ManyToOne(() => ProductComments, (comment) => comment.id)
  comments: ProductComments[];

  @OneToMany(() => User, (seller) => seller.products)
  seller: User;

  @OneToMany(() => User, (buyer) => buyer.products)
  buyer: User;
}
