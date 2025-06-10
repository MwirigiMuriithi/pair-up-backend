import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository }              from '@nestjs/typeorm';
import { Repository }                    from 'typeorm';
import { Heart }                         from './entities/heart.entity';
import { CreateHeartDto }                from './dto/create-heart.dto';

@Injectable()
export class HeartsService {
  constructor(
    @InjectRepository(Heart)
    private readonly repo: Repository<Heart>
  ) {}

  findAll(groupId: string): Promise<Heart[]> {
    return this.repo.find({ where: { groupId } });
  }

  async create(dto: CreateHeartDto): Promise<Heart> {
    const h = this.repo.create(dto);
    return this.repo.save(h);
  }

  async update(id: string, dto: CreateHeartDto): Promise<Heart> {
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
