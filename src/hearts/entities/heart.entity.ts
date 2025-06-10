import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hearts')
export class Heart {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column()            groupId: string;
  @Column()            createdBy: string;
  @Column()            updatedBy: string;
  @Column()            title: string;
  @Column('text')      content: string;
  @Column('bigint')    timestampMillis: number;
}
