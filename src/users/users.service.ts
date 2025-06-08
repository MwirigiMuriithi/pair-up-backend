import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository }    from 'typeorm';
import * as bcrypt       from 'bcrypt';
import { User }         from './entities/user.entity';
import { RegisterDto }  from '../auth/dto/register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>
  ) {}

  async create(dto: RegisterDto): Promise<User> {
    const hash = await bcrypt.hash(dto.password, 10);
    const user = this.repo.create({ ...dto, passwordHash: hash });
    return this.repo.save(user);
  }

  findByEmail(email: string) {
    return this.repo.findOneBy({ email });
  }
}
