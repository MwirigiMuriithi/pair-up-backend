import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard }     from '../common/guards/jwt-auth.guard';
import { TodayService }     from './today.service';
import { CreateTodayTaskDto } from './dto/create-today-task.dto';

@UseGuards(JwtAuthGuard)
@Controller('groups/:groupId/today')
export class TodayController {
  constructor(private readonly svc: TodayService) {}

  @Get()
  findAll(@Param('groupId') groupId: string) {
    return this.svc.findAll(groupId);
  }

  @Post()
  create(@Body() dto: CreateTodayTaskDto) {
    return this.svc.create(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.svc.remove(id);
  }
}
