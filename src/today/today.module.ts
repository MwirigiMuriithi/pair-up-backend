// src/today/today.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodayTask }      from './entities/today-task.entity';
import { TodayService }   from './today.service';
import { TodayController } from './today.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TodayTask])],
  providers: [TodayService],
  controllers: [TodayController],
})
export class TodayModule {}

