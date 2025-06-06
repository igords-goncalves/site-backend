import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectId,
  ObjectIdColumn,
} from 'typeorm';

@Entity('Faq')
export class FaqEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  type: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 500 })
  message: string;

  @CreateDateColumn()
  createdAt: Date;
}
