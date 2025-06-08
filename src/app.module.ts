// src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService }    from './app.service';

import { AuthModule }    from './auth/auth.module';
import { UsersModule }   from './users/users.module';
import { GroupsModule }  from './groups/groups.module';
import { TodayModule }   from './today/today.module';
import { EventsModule }  from './events/events.module';
import { BucketModule }  from './bucket/bucket.module';
import { HeartsModule }  from './hearts/hearts.module';
import { DreamsModule }  from './dreams/dreams.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type:       'postgres',
      host:       process.env.DB_HOST     || 'localhost',
      port:       parseInt(process.env.DB_PORT ?? '5432', 10),
      username:   process.env.DB_USER     || 'postgres',
      password:   process.env.DB_PASS     || 'postgres',
      database:   process.env.DB_NAME     || 'alandma',
      entities:   [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging:     process.env.NODE_ENV !== 'production',
    }),

    AuthModule,
    UsersModule,
    GroupsModule,
    TodayModule,
    EventsModule,
    BucketModule,
    HeartsModule,
    DreamsModule,
  ],
  controllers: [AppController],
  providers:    [AppService],
})
export class AppModule {}

