import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ description: 'Name of the event', example: 'Concert' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Total seats available for the event',
    example: 100,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly total_seats: number;
}
