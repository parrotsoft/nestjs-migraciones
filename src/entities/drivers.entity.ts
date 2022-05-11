import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { JoinColumn } from 'typeorm/browser';
import { Users } from './users.entity';

@Entity()
export class Drivers {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Users)
  @JoinColumn()
  user_id: Users;
}
