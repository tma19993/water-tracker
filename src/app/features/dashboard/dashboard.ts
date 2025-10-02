import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { WaterIntake } from '../../core/services/water-intake';
import { FormsModule } from '@angular/forms';
import { FormatUnitsPipe } from '../../shared/pipes/format-units-pipe';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule,FormatUnitsPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  private waterIntakeService = inject(WaterIntake);

  public intake$ = this.waterIntakeService.intake$;
  public containers$ = this.waterIntakeService.containers$;

  public amountToAdd = 0;
  
  public addManual() {
    this.waterIntakeService.addManual(this.amountToAdd);
    this.amountToAdd = 0;
  }

  public addContainer(containerId: string) {
    this.waterIntakeService.addContainer(containerId);
  }
 
}

