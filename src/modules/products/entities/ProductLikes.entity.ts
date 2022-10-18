// item.entity.ts
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/entities/base.entity';
import { Product } from './Product.entity';
import { User } from 'src/modules/users/entities/User.entity';

@Entity({ name: 'product_likes' })
export class ProductLike extends BaseEntity {
  // Relations
  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn({ name: 'product_id' })
  product_id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: number;
}
