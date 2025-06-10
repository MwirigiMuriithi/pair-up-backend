import { Module }          from '@nestjs/common';
import { TypeOrmModule }   from '@nestjs/typeorm';
import { Dream }           from './entities/dream.entity';
import { DreamsService }   from './dreams.service';
import { DreamsController} from './dreams.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Dream])],
  providers: [DreamsService],
  controllers:[DreamsController],
})
export class DreamsModule {}
