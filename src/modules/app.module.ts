import { Module } from '@nestjs/common';
import { AppController } from '@presentation/controllers/app.controller';
import { RolesModule } from '@modules/roles';
import { DatabaseModule } from '@modules/database/database.module';
import { ConfigModule } from '@modules/config';
@Module({
  imports: [DatabaseModule, ConfigModule, RolesModule],
  controllers: [AppController],
})
export class AppModule {}
