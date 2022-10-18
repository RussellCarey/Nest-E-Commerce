// item.entity.ts
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/entities/base.entity';
import { Product } from './Product.entity';
import { User } from 'src/modules/users/entities/User.entity';

@Entity({ name: 'product_comments' })
export class ProductComment extends BaseEntity {
  @Column({ type: 'varchar', length: 1000 })
  comment: string;

  // Relations
  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn({ name: 'product_id' })
  product_id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: number;
}
