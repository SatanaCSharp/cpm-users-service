import { Module } from '@nestjs/common';
import { RolesController } from '../../presentation/controllers/roles.controller';

@Module({
  controllers: [RolesController],
})
export class RolesModule {}
