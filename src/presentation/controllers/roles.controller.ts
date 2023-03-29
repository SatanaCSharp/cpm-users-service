import { Controller, Post } from '@nestjs/common';
import { CreateRoleUseCase } from '@business/use-cases/roles';

@Controller()
export class RolesController {
  @Post()
  createRole() {
    return new CreateRoleUseCase().execute({});
  }
}
