import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column()      username: string;
  @Column({unique: true}) email: string;
  @Column()      passwordHash: string;
}
