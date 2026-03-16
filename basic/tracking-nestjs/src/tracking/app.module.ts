import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { OrderModule } from '../order/order.module';
import { TrackingModule } from './tracking.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, OrderModule, TrackingModule, UsersModule],
})
export class AppModule {}