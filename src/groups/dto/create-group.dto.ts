import { IsString, ArrayNotEmpty, IsUUID } from 'class-validator';

export class CreateGroupDto {
  @IsString() name: string;

  @ArrayNotEmpty()
  @IsUUID('4', { each: true })
  members: string[];
}
