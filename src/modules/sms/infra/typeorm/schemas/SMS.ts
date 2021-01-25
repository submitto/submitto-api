import {
  Entity,
  ObjectID,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('sms')
class SMS {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  message: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default SMS;
