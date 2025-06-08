import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('groups')
export class Group {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column() name: string;

  // stored as CSV of user IDs
  @Column('text') membersCsv: string;
}
