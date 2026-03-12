import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {PrismaService} from './prisma/prisma.service';
import {OrderModule} from './order/order.module';
import {TrackingModule} from './tracking/tracking.module';


@Module({  imports: [ConfigModule.forRoot({
    isGlobal: true,
}), OrderModule, TrackingModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}