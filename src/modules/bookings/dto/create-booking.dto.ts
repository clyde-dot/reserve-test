import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty({ description: 'ID of the event to reserve', example: 1 })
  @IsNotEmpty()
  @IsNumber()
  readonly event_id: number;

  @ApiProperty({ description: 'User identifier (string)', example: 'user123' })
  @IsNotEmpty()
  @IsString()
  readonly user_id: string;
}
