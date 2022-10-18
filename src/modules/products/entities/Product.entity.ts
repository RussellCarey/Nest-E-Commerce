// item.entity.ts
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../entities/base.entity';
import { ProductCategory } from './ProductCategory.entity';
import { ProductComment } from './ProductComment.entity';

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

  // Relations
  @OneToMany(() => ProductComment, (comment) => comment.product_id)
  comments: ProductComment[];

  @ManyToOne(() => ProductCategory, (category) => category.id)
  @JoinColumn({ name: 'category_id' })
  category_id: number;
}
