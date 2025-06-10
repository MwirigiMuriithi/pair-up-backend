import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('bucket')
export class Bucket {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column()            groupId: string;
  @Column()            createdBy: string;
  @Column()            updatedBy: string;
  @Column()            title: string;
  @Column()            category: string;
  @Column('boolean')   isCompleted: boolean;
  @Column('bigint')    completedDateMillis: number;
  @Column('boolean')   isFavorite: boolean;
}
