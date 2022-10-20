// item.entity.ts
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../entities/base.entity';
import { ProductCategory } from './ProductCategory.entity';
import { ProductLike } from './ProductLikes.entity';
import { ProductComment } from './ProductComment.entity';
import { User } from 'src/modules/users/entities/User.entity';

export enum ProductStatus {
  DRAFT = 'draft',
  VISIBLE = 'visible',
  SOLD = 'sold',
  HIDDEN = 'hidden',
}

@Entity({ name: 'products' })
export class Product extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  product_name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'enum', enum: ProductStatus, default: ProductStatus.VISIBLE })
  status: ProductStatus;

  @Column({ type: 'varchar', length: 300 })
  image: string;

  @Column({ type: 'float', default: 0 })
  price: number;

  @Column({ type: 'int', default: 0 })
  discount_percent: number;

  @Column({ type: 'int', default: 0 })
  view_count: number;

  // Relations
  @OneToMany(() => ProductComment, (comment) => comment.product_id)
  comments: ProductComment[];

  @OneToMany(() => ProductLike, (like) => like.product_id)
  likes: ProductLike[];

  @ManyToOne(() => ProductCategory, (category) => category.id)
  @JoinColumn({ name: 'category_id' })
  category_id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'seller_id' })
  seller_id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'buyer_id' })
  buyer_id: number;
}
