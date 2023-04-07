import { Injectable } from '@nestjs/common';
import { IRolesQuery } from './roles.query.interface';
import { Role } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
@Injectable()
export class RolesQuery implements IRolesQuery {
  constructor(private readonly prismaService: PrismaService) {}
  findAll(): Promise<Role[]> {
    return this.prismaService.role.findMany();
  }
}
