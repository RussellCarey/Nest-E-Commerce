// item.entity.ts
import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from './user.entity';

@Entity({ name: 'user_comments' })
export class UserComments extends BaseEntity {
  @Column({ type: 'varchar', length: 1000 })
  comment: string;

  @ManyToOne(() => User, (user) => user)
  user: User[];

  @OneToMany(() => User, (user_for) => user_for)
  user_for: User[];
}
