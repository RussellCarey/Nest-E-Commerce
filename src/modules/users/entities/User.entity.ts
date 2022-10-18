// item.entity.ts
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../entities/base.entity';
import { ProductComment } from 'src/modules/products/entities/ProductComment.entity';
import { IsInt, Length, IsEmail, IsFQDN, IsString } from 'class-validator';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  //
  @Column({ type: 'varchar' })
  first_name: string;

  @Column({ type: 'varchar' })
  @Length(2, 50)
  second_name: string;

  @Column({ type: 'varchar' })
  @IsEmail()
  @Length(2, 100)
  email: string;

  @Column({ type: 'varchar' })
  @Length(8, 50)
  password: string;

  @Column({ type: 'int' })
  @IsInt()
  phone_number: number;

  @Column({ type: 'varchar' })
  @IsString()
  stripe_customer_token: string;

  @Column({ type: 'varchar' })
  @IsString()
  location: string;

  @Column({ type: 'varchar', length: 200 })
  @IsFQDN()
  image: string;

  // Relations
  @OneToMany(() => ProductComment, (comment) => comment.product_id)
  comments: ProductComment[];
}
