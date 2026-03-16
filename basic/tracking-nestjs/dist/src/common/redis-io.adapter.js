"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisIoAdaptor = void 0;
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
const redis_adapter_1 = require("@socket.io/redis-adapter");
const ioredis_1 = require("ioredis");
class RedisIoAdaptor extends platform_socket_io_1.IoAdapter {
    constructor(app) {
        super(app);
    }
    async connectToRedis() {
        const url = process.env.REDIS_URL || 'redis://localhost:6379';
        this.pubClient = new ioredis_1.default(url);
        this.subClient = new ioredis_1.default(url);
        await this.pubClient.connect();
        await this.subClient.connect();
    }
    createIOServer(port, options) {
        const server = super.createIOServer(port, options);
        if (this.pubClient && this.subClient) {
            server.adapter((0, redis_adapter_1.createAdapter)(this.pubClient, this.subClient));
        }
        return server;
    }
}
exports.RedisIoAdaptor = RedisIoAdaptor;
//# sourceMappingURL=redis-io.adapter.js.map