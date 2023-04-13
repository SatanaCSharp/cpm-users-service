import { PaginateDto } from '@presentation/dto/common';

export class BaseMapper {
  mapToPaginateDto<ResponseDto>(
    data: ResponseDto[],
    total: number,
  ): PaginateDto<ResponseDto> {
    const paginateDto = new PaginateDto<ResponseDto>();
    paginateDto.data = data;
    paginateDto.total = total;

    return paginateDto;
  }
}
