import {
  Controller, Get, Post, Put, Delete, Body, Param, UseGuards
} from '@nestjs/common';
import { JwtAuthGuard }    from '../common/guards/jwt-auth.guard';
import { DreamsService }   from './dreams.service';
import { CreateDreamDto }  from './dto/create-dream.dto';

@UseGuards(JwtAuthGuard)
@Controller('groups/:groupId/dreams')
export class DreamsController {
  constructor(private readonly svc: DreamsService) {}

  @Get()
  findAll(@Param('groupId') groupId: string) {
    return this.svc.findAll(groupId);
  }

  @Post()
  create(@Body() dto: CreateDreamDto) {
    return this.svc.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateDreamDto) {
    return this.svc.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.svc.remove(id);
  }
}
