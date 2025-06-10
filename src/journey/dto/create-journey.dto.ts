import { IsUUID, IsString, IsNumber } from 'class-validator';

export class CreateJourneyDto {
  @IsUUID()  groupId: string;
  @IsUUID()  createdBy: string;
  @IsUUID()  updatedBy: string;
  @IsString() title: string;
  @IsString() description: string;
  @IsNumber() journeyDateMillis: number;
  @IsString() type: string;
}
