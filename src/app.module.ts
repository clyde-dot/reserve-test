import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, BookingsModule, EventsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
