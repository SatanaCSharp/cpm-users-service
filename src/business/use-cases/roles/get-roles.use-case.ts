import { BaseUseCase } from '@business/common/use-cases';
import { ResponseRoleDto } from '@presentation/dto/roles';
import { IRolesQuery } from '@business/stores/roles/queries';
import { RolesMapper } from '@business/mappers';
import { PaginateDto } from '@presentation/dto/common';

export class GetRolesUseCase extends BaseUseCase<
  void,
  PaginateDto<ResponseRoleDto>
> {
  private readonly rolesMapper: RolesMapper = new RolesMapper();
  constructor(
    private readonly dependencies: {
      rolesQuery: IRolesQuery;
    },
  ) {
    super();
  }
  async execute(): Promise<PaginateDto<ResponseRoleDto>> {
    const roleEntities = await this.dependencies.rolesQuery.findAll();
    const data = this.rolesMapper.mapRoleEntitiesToResponseDtos(roleEntities);
    return this.rolesMapper.mapToPaginateDto(data, data.length);
  }
}
