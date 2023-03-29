export abstract class BaseUseCase<
  Request extends Record<string | number, unknown>,
  Response,
> {
  protected abstract execute(request: Request): Promise<Response>;
}
