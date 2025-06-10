import { IsUUID, IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateBucketDto {
  @IsUUID()  groupId: string;
  @IsUUID()  createdBy: string;
  @IsUUID()  updatedBy: string;
  @IsString() title: string;
  @IsString() category: string;
  @IsBoolean() isCompleted: boolean;
  @IsNumber() completedDateMillis: number;
  @IsBoolean() isFavorite: boolean;
}
