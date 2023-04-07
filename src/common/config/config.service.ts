import { Injectable } from '@nestjs/common';
import { ConfigSchema } from './config.schema';
import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';

@Injectable()
export class ConfigService {
  private readonly config: ConfigSchema;
  constructor() {
    this.config = this.getConfig();
  }

  getOrThrow<Key extends keyof ConfigSchema>(key: Key): ConfigSchema[Key] {
    const configValue = this.config[key];
    if (configValue) {
      return configValue;
    }

    throw new Error(`There is no value for ${key}, check config!`);
  }

  private getConfig(): ConfigSchema {
    const config = this.mapEnvToConfig();
    this.validateConfig(config);

    return config;
  }

  private mapEnvToConfig(): ConfigSchema {
    const envConfig: Record<string, unknown> = { ...process.env };

    return plainToClass(ConfigSchema, envConfig, {
      enableImplicitConversion: true,
    });
  }
  private validateConfig(config: ConfigSchema): void {
    const errors = validateSync(config, {
      skipMissingProperties: false,
      whitelist: true,
    });

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }
  }
}
