import { EPermissions } from '@common/types';

export class ResponseRoleDto {
  id: number;
  name: string;
  permissions: EPermissions[];
}
