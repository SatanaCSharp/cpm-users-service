import { Module } from '@nestjs/common';
import { AppController } from '@presentation/controllers/app.controller';
import { RolesModule } from '@modules/roles';
@Module({
  imports: [RolesModule],
  controllers: [AppController],
})
export class AppModule {}
