export interface WaterEntryModel {
  amount: number;       
  type: 'manual' | 'container';  
  containerId?: string; 
  timestamp: string;
}