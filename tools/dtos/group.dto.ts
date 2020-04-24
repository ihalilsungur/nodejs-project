import { IsNotEmpty ,Length} from 'class-validator';
import { RoleDto } from './role.dto';

export class GroupCreateDto {
    @IsNotEmpty()
    @Length(2, 30)
    name: string;
    @IsNotEmpty()
    @Length(2, 130)
    description: string;
  }
  
  // tslint:disable-next-line: max-classes-per-file
  export class GroupRolesDto {
    roles: RoleDto[];
  }