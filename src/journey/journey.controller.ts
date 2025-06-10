import {
  Controller, Get, Post, Put, Delete, Body, Param, UseGuards
} from '@nestjs/common';
import { JwtAuthGuard }    from '../common/guards/jwt-auth.guard';
import { JourneyService }  from './journey.service';
import { CreateJourneyDto} from './dto/create-journey.dto';

@UseGuards(JwtAuthGuard)
@Controller('groups/:groupId/journey')
export class JourneyController {
  constructor(private readonly svc: JourneyService) {}

  @Get()
  findAll(@Param('groupId') groupId: string) {
    return this.svc.findAll(groupId);
  }

  @Post()
  create(@Body() dto: CreateJourneyDto) {
    return this.svc.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateJourneyDto) {
    return this.svc.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.svc.remove(id);
  }
}
