import { Injectable, signal } from '@angular/core';
import { ContainerModel, WaterEntryModel, WaterIntakeModel } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class WaterIntake {
  
  private todayKey = new Date().toISOString().slice(0, 10);

private intake = signal<WaterIntakeModel>({
    date: this.todayKey,
    total: 0,
    entries: []
  });

  private containers = signal<ContainerModel[]>([
    { id: 'glass', name: 'Szklanka', volume: 250 },
    { id: 'bottle', name: 'Butelka', volume: 500 },
  ]);

   intake$ = this.intake.asReadonly();
  containers$ = this.containers.asReadonly();


  addManual(amount: number) {
    const entry: WaterEntryModel = {
      amount,
      type: 'manual',
      timestamp: new Date().toISOString()
    };

    this.updateIntake(entry);
  }

  addContainer(containerId: string) {
    const container = this.containers().find(c => c.id === containerId);
    if (!container) return;

    const entry: WaterEntryModel = {
      amount: container.volume,
      type: 'container',
      containerId,
      timestamp: new Date().toISOString()
    };

    this.updateIntake(entry);
  }


  addCustomContainer(name: string, volume: number) {
    const newContainer: ContainerModel = {
      id: crypto.randomUUID(),
      name,
      volume
    };
    this.containers.update(c => [...c, newContainer]);
  }

  private updateIntake(entry: WaterEntryModel) {
    this.intake.update(state => ({
      ...state,
      total: state.total + entry.amount,
      entries: [...state.entries, entry]
    }));
  }

  resetDay() {
    this.intake.set({
      date: this.todayKey,
      total: 0,
      entries: []
    });
  }
  
}
