// item.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/entities/base.entity';

@Entity({ name: 'user_ratings' })
export class UserRating extends BaseEntity {
  //
  @Column({ type: 'int' })
  rating: number;
}
