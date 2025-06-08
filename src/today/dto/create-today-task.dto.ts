import { IsString, IsUUID, IsBoolean, IsNumber } from 'class-validator';

export class CreateTodayTaskDto {
  @IsUUID()   groupId: string;
  @IsUUID()   createdBy: string;
  @IsString() title: string;
  @IsString() description: string;
  @IsNumber() dueDateMillis: number;
  @IsBoolean() isCompleted: boolean;
}
