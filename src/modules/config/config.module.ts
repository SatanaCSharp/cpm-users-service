import { Global, Module } from '@nestjs/common';
import { ConfigSchema, ConfigService } from '@common/config';

@Global()
@Module({
  providers: [ConfigSchema, ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
