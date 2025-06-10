export class BucketDto {
  id: string;
  groupId: string;
  createdBy: string;
  updatedBy: string;
  title: string;
  category: string;
  isCompleted: boolean;
  completedDateMillis: number;
  isFavorite: boolean;
}
