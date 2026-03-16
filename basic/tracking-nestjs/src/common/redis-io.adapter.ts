import { INestApplication } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import Redis from 'ioredis';

export class RedisIoAdaptor extends IoAdapter {
  private pubClient!: Redis;
  private subClient!: Redis;

  constructor(app: INestApplication) {
    super(app);
  }

  async connectToRedis() {
    const url = process.env.REDIS_URL || 'redis://localhost:6379';
    this.pubClient = new Redis(url);
    this.subClient = new Redis(url);
    await this.pubClient.connect();
    await this.subClient.connect();
  }

  createIOServer(port: number, options?: any) {
    const server = super.createIOServer(port, options);

    if (this.pubClient && this.subClient) {
      server.adapter(createAdapter(this.pubClient, this.subClient));
    }

    return server;
  }
}
