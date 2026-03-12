import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {PrismaService} from '../../prisma/prisma.service';
import * as QRCode from 'qrcode';
import * as crypto from 'crypto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

    async createOrder(data: any) {
        const trackingId = `TRK-${crypto.randomBytes(8).toString('hex').toUpperCase()}`;
        const trackingUrl = `${process.env.APP_URL}/tracking/${trackingId}`;
        const qrCode = await QRCode.toDataURL(trackingUrl);

        const pin = Math.floor(100000 + Math.random() * 900000).toString();
        const deliveryPinHash = crypto.createHash('sha256').update(pin).digest('hex');

        const order = await this.prisma.order.create({
            data: {
                trackingId, qrCodeUrl: qrCode, deliveryPinHash, ...data,
            },
        }); 
        return {...order, rawPin: pin};

    }
}