import { Module }           from '@nestjs/common';
import { TypeOrmModule }    from '@nestjs/typeorm';
import { Journey }          from './entities/journey.entity';
import { JourneyService }   from './journey.service';
import { JourneyController }from './journey.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Journey])],
  providers: [JourneyService],
  controllers:[JourneyController],
})
export class JourneyModule {}
