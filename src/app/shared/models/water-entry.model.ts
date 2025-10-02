export interface WaterEntryModel {
  amount: number;       
  type: 'manual' | 'container';  
  name?: string; 
  timestamp: string;
}