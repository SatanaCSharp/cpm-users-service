import { BaseUseCase } from '@business/common/use-cases';
import { ResponseRoleDto } from '@presentation/dto/roles';
import { IRolesQuery } from '@business/stores/roles/queries';
import { RolesMapper } from '@business/mappers';

export class GetRolesUseCase extends BaseUseCase<void, ResponseRoleDto[]> {
  private readonly rolesMapper: RolesMapper = new RolesMapper();
  constructor(
    private readonly dependencies: {
      rolesQuery: IRolesQuery;
    },
  ) {
    super();
  }
  async execute(): Promise<ResponseRoleDto[]> {
    const roleEntities = await this.dependencies.rolesQuery.findAll();
    return this.rolesMapper.mapRoleEntitiesToResponseDtos(roleEntities);
  }
}
