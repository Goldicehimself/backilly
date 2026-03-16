import { INestApplication } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
export declare class RedisIoAdaptor extends IoAdapter {
    private pubClient;
    private subClient;
    constructor(app: INestApplication);
    connectToRedis(): Promise<void>;
    createIOServer(port: number, options?: any): any;
}
