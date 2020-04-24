import { AuditModel } from "./audit.model";
import * as mongoose from 'mongoose';

export class ActivityTypeModel {
    id: string;
    name: string;
    audit: AuditModel;
  }
  
  export const ActivityTypeSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: [true, 'Activity Type Name must be unique'],
      required: [true, 'ActivityType Name is required'],
    },
    audit: { type: Object },
  });