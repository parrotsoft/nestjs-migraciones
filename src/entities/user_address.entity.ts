import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { JoinColumn } from 'typeorm/browser';
import { City } from './city.entity';
import { Users } from './users.entity';

@Entity()
export class UserAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  description: string;

  @Column()
  zipcode: number;

  @Column()
  geolocation: Geolocation;

  @OneToOne(() => Users)
  @JoinColumn()
  user_id: Users;

  @OneToOne(() => City)
  @JoinColumn()
  city_id: City;
}
