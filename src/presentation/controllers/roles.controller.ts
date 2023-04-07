import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateRoleUseCase, GetRolesUseCase } from '@business/use-cases/roles';
import { CreateRoleDto } from '@presentation/dto/roles';
import { IRolesCommand, RolesCommand } from '@business/stores/roles/commands';
import { IRolesQuery, RolesQuery } from '@business/stores/roles/queries';

@Controller('roles')
export class RolesController {
  constructor(
    @Inject(RolesCommand.name)
    private readonly rolesCommand: IRolesCommand,
    @Inject(RolesQuery.name)
    private readonly rolesQuery: IRolesQuery,
  ) {}

  @Get()
  findAll() {
    return new GetRolesUseCase({ rolesQuery: this.rolesQuery }).execute();
  }
  @Post()
  createRole(@Body() dto: CreateRoleDto) {
    return new CreateRoleUseCase({ rolesCommand: this.rolesCommand }).execute(
      dto,
    );
  }
}
