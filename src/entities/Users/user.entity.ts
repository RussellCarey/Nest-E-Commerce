// item.entity.ts
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Product } from '../Products/product.entity';
import { UserRating } from './userrating.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  //
  @Column({ type: 'varchar', length: 100 })
  first_name: string;

  @Column({ type: 'varchar', length: 100 })
  second_name: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 300 })
  password: string;

  @Column({ type: 'int' })
  phone_number: number;

  @Column({ type: 'varchar', length: 300 })
  stripe_customer_token: string;

  @Column({ type: 'varchar', length: 300 })
  location: string;

  @OneToMany(() => UserRating, (rating) => rating)
  rating: UserRating[];

  @OneToMany(() => Product, (product) => product)
  products: Product[];
}
