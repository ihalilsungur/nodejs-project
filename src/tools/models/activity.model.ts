import { AuditModel } from "./audit.model";
import { ActivityTypeModel } from "./activity-type.model";
import * as mongoose from 'mongoose';

export class ActivityModel {
    id: string;
    name: string;
    audit: AuditModel;
    type: ActivityTypeModel;
  }
  
  export const ActivitySchema = new mongoose.Schema({
    name: {
      type: String,
      unique: [true, 'Activity Name must be unique'],
      required: [true, 'Activity Name is required'],
    },
    audit: { type: Object },
    type: { type: Object, required: [true, 'Activity Type is required'] },
  });