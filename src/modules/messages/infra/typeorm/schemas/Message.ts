import {
  Entity,
  ObjectID,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('messages')
class Notification {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  body: string;

  @Column('uuid')
  recipient_id: string;

  @Column({ default: false })
  read: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Notification;
