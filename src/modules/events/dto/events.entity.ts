import { ApiProperty } from '@nestjs/swagger';
import { Events } from 'generated/prisma';

export class EventsEntity implements Events {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  total_seats: number;

  @ApiProperty()
  created_at: Date;
}
