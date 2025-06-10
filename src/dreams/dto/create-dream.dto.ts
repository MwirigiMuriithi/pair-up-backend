import { IsUUID, IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateDreamDto {
  @IsUUID()  groupId: string;
  @IsUUID()  createdBy: string;
  @IsUUID()  updatedBy: string;
  @IsString() title: string;
  @IsString() description: string;
  @IsBoolean() isAchieved: boolean;
  @IsNumber() targetDateMillis: number;
}
