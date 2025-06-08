import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard }      from '../common/guards/jwt-auth.guard';
import { GroupsService }     from './groups.service';
import { CreateGroupDto }    from './dto/create-group.dto';

@UseGuards(JwtAuthGuard)
@Controller('groups')
export class GroupsController {
  constructor(private readonly svc: GroupsService) {}

  @Post()
  create(@Body() dto: CreateGroupDto) {
    return this.svc.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.svc.findOne(id);
  }
}
