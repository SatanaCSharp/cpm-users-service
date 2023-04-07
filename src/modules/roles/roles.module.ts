import { Module } from '@nestjs/common';
import { RolesController } from '@presentation/controllers/roles.controller';
import { RolesCommand } from '@business/stores/roles/commands';
import { RolesQuery } from '@business/stores/roles/queries';

@Module({
  providers: [
    {
      provide: RolesCommand.name,
      useClass: RolesCommand,
    },
    {
      provide: RolesQuery.name,
      useClass: RolesQuery,
    },
  ],
  controllers: [RolesController],
})
export class RolesModule {}
