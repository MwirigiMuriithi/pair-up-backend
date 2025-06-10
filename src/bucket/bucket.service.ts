import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository }              from '@nestjs/typeorm';
import { Repository }                    from 'typeorm';
import { Bucket }                        from './entities/bucket.entity';
import { CreateBucketDto }               from './dto/create-bucket.dto';

@Injectable()
export class BucketService {
  constructor(
    @InjectRepository(Bucket)
    private readonly repo: Repository<Bucket>
  ) {}

  findAll(groupId: string): Promise<Bucket[]> {
    return this.repo.find({ where: { groupId } });
  }

  async create(dto: CreateBucketDto): Promise<Bucket> {
    const b = this.repo.create(dto);
    return this.repo.save(b);
  }

  async update(id: string, dto: CreateBucketDto): Promise<Bucket> {
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
