// item.entity.ts
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/entities/base.entity';
import { Product } from './Product.entity';

@Entity({ name: 'product_categories' })
export class ProductCategory extends BaseEntity {
  //
  @Column({ type: 'varchar', length: 1000 })
  category: string;

  // Relations
  @OneToMany(() => Product, (product) => product.category_id)
  products: Product[];
}
