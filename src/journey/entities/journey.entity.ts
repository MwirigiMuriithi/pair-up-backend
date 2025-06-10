import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('journey')
export class Journey {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column()            groupId: string;
  @Column()            createdBy: string;
  @Column()            updatedBy: string;
  @Column()            title: string;
  @Column('text')      description: string;
  @Column('bigint')    journeyDateMillis: number;
  @Column()            type: string;
}
