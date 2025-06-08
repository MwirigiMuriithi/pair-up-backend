import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { TodayModule } from './today/today.module';
import { EventsModule } from './events/events.module';
import { BucketModule } from './bucket/bucket.module';
import { HeartsModule } from './hearts/hearts.module';
import { DreamsModule } from './dreams/dreams.module';

@Module({
  imports: [AuthModule, UsersModule, GroupsModule, TodayModule, EventsModule, BucketModule, HeartsModule, DreamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
