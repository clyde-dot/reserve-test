import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventsService } from '../events/events.service';
import { Bookings } from 'generated/prisma';

@Injectable()
export class BookingsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly eventsService: EventsService,
  ) {}

  async reserve(createBookingDto: CreateBookingDto): Promise<Bookings> {
    const { event_id, user_id } = createBookingDto;

    const event = await this.eventsService.findById(event_id);
    if (!event) {
      throw new BadRequestException('Мероприятие не найдено');
    }

    const alreadyBooked = await this.prismaService.bookings.findFirst({
      where: { event_id, user_id },
    });
    if (alreadyBooked) {
      throw new BadRequestException(
        'Пользователь уже забронировал место на это мероприятие',
      );
    }

    const bookedSeatsCount = await this.prismaService.bookings.count({
      where: { event_id },
    });
    if (bookedSeatsCount >= event.total_seats) {
      throw new BadRequestException(
        'Все места на это мероприятие уже забронированы',
      );
    }
    return this.prismaService.bookings.create({
      data: { event_id, user_id },
    });
  }

  async findAll() {
    return await this.prismaService.bookings.findMany({
      include: { event: true },
    });
  }
}
