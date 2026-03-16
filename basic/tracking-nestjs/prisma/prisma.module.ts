import {Global, Module} from '@nestjs/common';
import {PrismaService} from './prisma.service';

@Global()   //just to make prisma service available globally without importing the module in other modules
@Module({
  providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}