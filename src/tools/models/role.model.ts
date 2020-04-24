import { AuditModel } from "./audit.model";
import * as mongoose from 'mongoose';

export class RoleModel {
    id: string;
    name: string;
    audit: AuditModel;
  }
  
  export const RoleSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: [true, 'Role Name must be unique'],
      required: [true, 'Role Name is required'],
    },
    audit: { type: Object },
  });