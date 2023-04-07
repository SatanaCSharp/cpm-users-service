import { Role } from '@prisma/client';
import { ResponseRoleDto } from '@presentation/dto/roles';
import { EPermissions } from '@common/types';

export class RolesMapper {
  mapRoleEntitiesToResponseDtos(roleEntities: Role[]): ResponseRoleDto[] {
    return roleEntities.map((e) => {
      const dto = new ResponseRoleDto();
      dto.id = e.id;
      dto.name = e.name;
      dto.permissions = e.permissions as EPermissions[];
      return dto;
    });
  }
}
