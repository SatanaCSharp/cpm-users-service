import { PrismaService } from 'nestjs-prisma';
import { IRolesCommand } from './roles.command.interface';
import { Role, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesCommand implements IRolesCommand {
  constructor(readonly prismaService: PrismaService) {}
  create(data: Prisma.RoleCreateInput): Promise<Role> {
    return this.prismaService.role.create({ data });
  }
}
