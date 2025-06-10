import { IsUUID, IsString, IsNumber } from 'class-validator';

export class CreateHeartDto {
  @IsUUID()  groupId: string;
  @IsUUID()  createdBy: string;
  @IsUUID()  updatedBy: string;
  @IsString() title: string;
  @IsString() content: string;
  @IsNumber() timestampMillis: number;
}
