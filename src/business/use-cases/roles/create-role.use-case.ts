import { BaseUseCase } from '@common/../../common/usecases';

export class CreateRoleUseCase extends BaseUseCase<
  Record<string, unknown>,
  unknown
> {
  execute(request: unknown): Promise<unknown> {
    return Promise.resolve(undefined);
  }
}
