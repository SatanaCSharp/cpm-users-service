import { Global, Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigService } from '@common/config';
import { PrismaClientOptions } from '@prisma/client/runtime';

@Global()
@Module({
  imports: [
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: (configService: ConfigService) => {
        const datasources: PrismaClientOptions['datasources'] = {
          db: {
            url: configService.getOrThrow('DATABASE_URL'),
          },
        };

        const isLogging = configService.getOrThrow('IS_DB_LOGGING');
        const log: PrismaClientOptions['log'] = !isLogging
          ? undefined
          : ['info', 'query', 'warn', 'error'];

        const prismaOptions: PrismaClientOptions = { datasources, log };

        return { explicitConnect: true, prismaOptions };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
