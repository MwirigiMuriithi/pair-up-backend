import {
  Controller, Get, Post, Put, Delete, Body, Param, UseGuards
} from '@nestjs/common';
import { JwtAuthGuard }   from '../common/guards/jwt-auth.guard';
import { HeartsService }  from './hearts.service';
import { CreateHeartDto } from './dto/create-heart.dto';

@UseGuards(JwtAuthGuard)
@Controller('groups/:groupId/hearts')
export class HeartsController {
  constructor(private readonly svc: HeartsService) {}

  @Get()
  findAll(@Param('groupId') groupId: string) {
    return this.svc.findAll(groupId);
  }

  @Post()
  create(@Body() dto: CreateHeartDto) {
    return this.svc.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateHeartDto) {
    return this.svc.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.svc.remove(id);
  }
}
