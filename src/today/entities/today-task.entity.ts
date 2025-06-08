import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('today_tasks')
export class TodayTask {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column()            groupId: string;
  @Column()            createdBy: string;
  @Column()            title: string;
  @Column('text')      description: string;
  @Column('bigint')    dueDateMillis: number;
  @Column('boolean')   isCompleted: boolean;
}
