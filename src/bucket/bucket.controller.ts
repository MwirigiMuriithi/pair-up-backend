import {
  Controller, Get, Post, Put, Delete, Body, Param, UseGuards
} from '@nestjs/common';
import { JwtAuthGuard }   from '../common/guards/jwt-auth.guard';
import { BucketService }  from './bucket.service';
import { CreateBucketDto } from './dto/create-bucket.dto';

@UseGuards(JwtAuthGuard)
@Controller('groups/:groupId/bucket')
export class BucketController {
  constructor(private readonly svc: BucketService) {}

  @Get()
  findAll(@Param('groupId') groupId: string) {
    return this.svc.findAll(groupId);
  }

  @Post()
  create(@Body() dto: CreateBucketDto) {
    return this.svc.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateBucketDto) {
    return this.svc.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.svc.remove(id);
  }
}
