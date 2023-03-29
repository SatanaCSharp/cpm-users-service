import { BaseUseCase } from '@common/../../common/usecases';

export class GetRolesUseCase extends BaseUseCase<
  Record<string, string>,
  unknown
> {
  protected execute(request: Record<string, string>): Promise<unknown> {
    return Promise.resolve(undefined);
  }
}
