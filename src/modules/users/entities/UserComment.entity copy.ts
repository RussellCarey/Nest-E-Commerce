// item.entity.ts
import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/entities/base.entity';

@Entity({ name: 'user_comments' })
export class UserComments extends BaseEntity {
  @Column({ type: 'varchar', length: 1000 })
  comment: string;
}
