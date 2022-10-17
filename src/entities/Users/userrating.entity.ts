// item.entity.ts
import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from './user.entity';

@Entity({ name: 'user_ratings' })
export class UserRating extends BaseEntity {
  //
  @Column({ type: 'int' })
  rating: number;

  @ManyToOne(() => User, (user) => user)
  user: User[];

  @ManyToOne(() => User, (user_for) => user_for)
  user_for: User[];
}
