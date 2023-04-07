import { BaseUseCase } from '@business/common/use-cases';
import { IRolesCommand } from '@business/stores/roles/commands';
import { CreateRoleDto } from '@presentation/dto/roles';

export class CreateRoleUseCase extends BaseUseCase<CreateRoleDto> {
  constructor(
    private readonly dependencies: {
      rolesCommand: IRolesCommand;
    },
  ) {
    super();
  }
  async execute(dto: CreateRoleDto): Promise<void> {
    await this.dependencies.rolesCommand.create(dto);
  }
}
