import { Module }           from '@nestjs/common';
import { TypeOrmModule }    from '@nestjs/typeorm';
import { Heart }            from './entities/heart.entity';
import { HeartsService }    from './hearts.service';
import { HeartsController } from './hearts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Heart])],
  providers: [HeartsService],
  controllers:[HeartsController],
})
export class HeartsModule {}
