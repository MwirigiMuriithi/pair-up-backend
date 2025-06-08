import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository }   from 'typeorm';
import { Group }        from './entities/group.entity';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly repo: Repository<Group>
  ) {}

  create(dto: CreateGroupDto) {
    const g = this.repo.create({
      name: dto.name,
      membersCsv: dto.members.join(',')
    });
    return this.repo.save(g);
  }

  findOne(id: string) {
    return this.repo.findOneByOrFail({ id });
  }
}
