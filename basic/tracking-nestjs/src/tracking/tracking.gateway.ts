import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';

@WebSocketGateway()
export class TrackingGateway {
  @SubscribeMessage('ping')
  handlePing(@MessageBody() data: any): string {
    return 'pong';
  }
}
