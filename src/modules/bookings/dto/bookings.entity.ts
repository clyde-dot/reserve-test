import { ApiProperty } from '@nestjs/swagger';
import { Bookings } from 'generated/prisma';

export class BookingsEntity implements Bookings {
  @ApiProperty()
  id: number;

  @ApiProperty()
  event_id: number;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  created_at: Date;
}
