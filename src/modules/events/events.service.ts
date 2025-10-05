import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Events } from 'generated/prisma';

@Injectable()
export class EventsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createEventDto: CreateEventDto): Promise<Events> {
    return await this.prismaService.events.create({ data: createEventDto });
  }

  async findById(id: number): Promise<Events | null> {
    return await this.prismaService.events.findUnique({
      where: { id },
      include: { bookings: true },
    });
  }

  async findAll(): Promise<Events[]> {
    return await this.prismaService.events.findMany({
      include: { bookings: true },
    });
  }
}
