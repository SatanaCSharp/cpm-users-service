import { Inject } from '@nestjs/common';
import { RolesCommand } from '@business/stores/roles/commands';
import { RolesQuery } from '@business/stores/roles/queries';

export const RolesCommandInject = () => Inject(RolesCommand.name);
export const RolesQueryInject = () => Inject(RolesQuery.name);
