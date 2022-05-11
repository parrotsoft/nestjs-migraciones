import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { JoinColumn } from 'typeorm/browser';
import { Drivers } from './drivers.entity';
import { License_types } from './license_types.entity';

@Entity()
export class Driver_licenses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expedition_date: Date;

  @Column()
  expiration_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Drivers)
  @JoinColumn()
  driver_id: Drivers;

  @OneToOne(() => License_types)
  @JoinColumn()
  license_type_id: License_types;
}
