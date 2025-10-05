import { Controller, Post, Body, Get } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BookingsEntity } from './dto/bookings.entity';

@ApiTags('bookings')
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post('reserve')
  @ApiOperation({ summary: 'Reserve a seat for an event' })
  @ApiResponse({
    status: 201,
    description: 'Booking created',
    type: BookingsEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request (no seats or already booked)',
  })
  reserve(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingsService.reserve(createBookingDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all bookings' })
  @ApiResponse({
    status: 200,
    description: 'List of bookings',
    type: [BookingsEntity],
  })
  findAll() {
    return this.bookingsService.findAll();
  }
}
