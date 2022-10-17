// item.entity.ts
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Product } from './product.entity';

//TODO - Likes and comments?

@Entity({ name: 'product_categories' })
export class ProductCategory extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  category_name: string;

  @ManyToOne(() => Product, (product) => product.id)
  products: Product[];
}
