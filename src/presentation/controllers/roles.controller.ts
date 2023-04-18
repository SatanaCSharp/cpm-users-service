import { Controller } from '@nestjs/common';
import { CreateRoleUseCase, GetRolesUseCase } from '@business/use-cases/roles';
import { CreateRoleDto } from '@presentation/dto/roles';
import { IRolesCommand } from '@business/stores/roles/commands';
import { IRolesQuery } from '@business/stores/roles/queries';
import { RolesCommandInject, RolesQueryInject } from '@presentation/injects';
import { GrpcMethod } from '@nestjs/microservices';
import { GRPC_ROLES_SERVICE } from '@common/config';

@Controller()
export class RolesController {
  constructor(
    @RolesCommandInject()
    private readonly rolesCommand: IRolesCommand,
    @RolesQueryInject()
    private readonly rolesQuery: IRolesQuery,
  ) {}

  @GrpcMethod(GRPC_ROLES_SERVICE, 'FindAll')
  findAll(dto: unknown) {
    return new GetRolesUseCase({ rolesQuery: this.rolesQuery }).execute();
  }
  @GrpcMethod(GRPC_ROLES_SERVICE, 'CreateRole')
  createRole(dto: CreateRoleDto) {
    return new CreateRoleUseCase({ rolesCommand: this.rolesCommand }).execute(
      dto,
    );
  }
}
