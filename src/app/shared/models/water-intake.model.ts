import { WaterEntryModel } from "./water-entry.model";

export interface WaterIntakeModel {
  date: string;          
  total: number; 
  entries: WaterEntryModel[];
}