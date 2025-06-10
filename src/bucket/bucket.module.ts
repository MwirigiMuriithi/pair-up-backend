import { Module }           from '@nestjs/common';
import { TypeOrmModule }    from '@nestjs/typeorm';
import { Bucket }           from './entities/bucket.entity';
import { BucketService }    from './bucket.service';
import { BucketController } from './bucket.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bucket])],
  providers: [BucketService],
  controllers:[BucketController],
})
export class BucketModule {}
