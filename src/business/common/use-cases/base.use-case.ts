export abstract class BaseUseCase<Request, Response = void> {
  protected abstract execute(request: Request): Promise<Response>;
}
