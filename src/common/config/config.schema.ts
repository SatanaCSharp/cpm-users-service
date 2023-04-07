import { Injectable } from '@nestjs/common';
import { IsBoolean, IsNotEmpty, IsPositive, IsString } from 'class-validator';

@Injectable()
export class ConfigSchema {
  @IsPositive()
  readonly PORT!: number;

  @IsPositive()
  readonly DEBUG_PORT!: number;

  @IsNotEmpty()
  @IsString()
  readonly DATABASE_URL!: string;

  @IsBoolean()
  readonly IS_DB_LOGGING: boolean;
}
