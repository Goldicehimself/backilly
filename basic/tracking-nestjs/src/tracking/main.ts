import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {RedisIoAdaptor} from './common/redis-io-adaptor';
import {Validator} from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const redisIoAdaptor = new RedisIoAdaptor(app);
    await redisIoAdaptor.connectToRedis();
    app.useWebSocketAdapter(redisIoAdaptor);

    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new Validator());
    app.enableCors();

    await app.listen(3000);
}

bootstrap();