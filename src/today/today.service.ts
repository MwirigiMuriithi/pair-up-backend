import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository }       from 'typeorm';
import { TodayTask }        from './entities/today-task.entity';
import { CreateTodayTaskDto } from './dto/create-today-task.dto';

@Injectable()
export class TodayService {
  constructor(
    @InjectRepository(TodayTask)
    private readonly repo: Repository<TodayTask>
  ) {}

  findAll(groupId: string) {
    return this.repo.find({ where: { groupId } });
  }

  async create(dto: CreateTodayTaskDto) {
    const t = this.repo.create(dto);
    return this.repo.save(t);
  }

  async remove(id: string) {
    const res = await this.repo.delete(id);
    if (res.affected === 0) throw new NotFoundException();
    return { deleted: true };
  }
}
