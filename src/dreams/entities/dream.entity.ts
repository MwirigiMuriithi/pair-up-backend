import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('dreams')
export class Dream {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column()            groupId: string;
  @Column()            createdBy: string;
  @Column()            updatedBy: string;
  @Column()            title: string;
  @Column('text')      description: string;
  @Column('boolean')   isAchieved: boolean;
  @Column('bigint')    targetDateMillis: number;
}
