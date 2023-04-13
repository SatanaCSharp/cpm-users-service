import { NestFactory } from '@nestjs/core';
import { AppModule } from '@modules/index';
import { Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService, PROTOBUF_PACKAGE } from '@common/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: configService.getOrThrow('GRPC_URL'),
      package: PROTOBUF_PACKAGE,
      protoPath: 'node_modules/cpm-proto/proto/users/root.proto',
    },
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.startAllMicroservices();
}
bootstrap();
