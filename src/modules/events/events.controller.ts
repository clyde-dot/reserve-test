import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EventsEntity } from './dto/events.entity';

@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @ApiOperation({ summary: 'Create an event' })
  @ApiResponse({ status: 201, description: 'Event created', type: EventsEntity })
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all events' })
  @ApiResponse({ status: 200, description: 'Events list', type: [EventsEntity] })
  findAll() {
    return this.eventsService.findAll();
  }
}
