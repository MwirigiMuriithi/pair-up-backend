import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository }              from '@nestjs/typeorm';
import { Repository }                    from 'typeorm';
import { Journey }                       from './entities/journey.entity';
import { CreateJourneyDto }              from './dto/create-journey.dto';

@Injectable()
export class JourneyService {
  constructor(
    @InjectRepository(Journey)
    private readonly repo: Repository<Journey>
  ) {}

  findAll(groupId: string): Promise<Journey[]> {
    return this.repo.find({ where: { groupId } });
  }

  async create(dto: CreateJourneyDto): Promise<Journey> {
    const j = this.repo.create(dto);
    return this.repo.save(j);
  }

  async update(id: string, dto: CreateJourneyDto): Promise<Journey> {
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
