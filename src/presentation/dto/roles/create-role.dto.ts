import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { EPermissions } from '@common/types';

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsEnum(EPermissions, { each: true, message: 'invalid_permission' })
  @IsNotEmpty()
  permissions: EPermissions[];
}
