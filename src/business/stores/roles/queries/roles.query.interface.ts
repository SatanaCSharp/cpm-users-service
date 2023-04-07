import { Role } from '@prisma/client';

export interface IRolesQuery {
  findAll(): Promise<Role[]>;
}
