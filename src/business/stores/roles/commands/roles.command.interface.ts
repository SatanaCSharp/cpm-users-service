import { Prisma, Role } from '@prisma/client';

export interface IRolesCommand {
  create(data: Prisma.RoleCreateInput): Promise<Role>;
}
