import { TicketTypeModel } from '../models/ticket-type.model';
import { ActivityModel } from '../models/activity.model';
import { AuditModel } from '../models/audit.model';
import { InventoryModel } from '../models/inventory.model';
import { UserModel } from '../models/user.model';
import { IsNotEmpty, Length } from 'class-validator';

export class TicketCreateDto {
  @IsNotEmpty()
  @Length(2, 30)
  name: string;
  @IsNotEmpty()
  @Length(2, 120)
  description: string;
  @IsNotEmpty()
  type: TicketTypeModel;
  @IsNotEmpty()
  responsible: UserModel;
  audit: AuditModel;
  activities: ActivityModel[];
  inventories: InventoryModel[];
}
