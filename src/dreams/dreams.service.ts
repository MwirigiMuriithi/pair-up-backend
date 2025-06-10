import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository }              from '@nestjs/typeorm';
import { Repository }                    from 'typeorm';
import { Dream }                         from './entities/dream.entity';
import { CreateDreamDto }                from './dto/create-dream.dto';

@Injectable()
export class DreamsService {
  constructor(
    @InjectRepository(Dream)
    private readonly repo: Repository<Dream>
  ) {}

  findAll(groupId: string): Promise<Dream[]> {
    return this.repo.find({ where: { groupId } });
  }

  async create(dto: CreateDreamDto): Promise<Dream> {
    const d = this.repo.create(dto);
    return this.repo.save(d);
  }

  async update(id: string, dto: CreateDreamDto): Promise<Dream> {
    await this.repo.update(id, dto);
    const updated = await this.repo.findOneBy({ id });
    if (!updated) throw new NotFoundException();
    return updated;
  }

  async remove(id: string): Promise<void> {
    const res = await this.repo.delete(id);
    if (res.affected === 0) throw new NotFoundException();
  }
}
