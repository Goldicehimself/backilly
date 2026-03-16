import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(data: any): Promise<{
        rawPin: string;
        orderId: string;
        totalPrice: import("@prisma/client-runtime-utils").Decimal;
        paymentStatus: string;
        paymentMethod: string;
        deliveryAddress: string;
        deliveryPhone: string;
        paidAt: Date;
        isPaid: boolean;
        paymentReference: string;
        paystackAccessCode: string;
        status: import("../../generated/prisma/enums").orderStatus;
        deliveryStatus: import("../../generated/prisma/enums").orderStatus;
        ownerId: string;
    }>;
}
