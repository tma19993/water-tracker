import { CommonModule } from '@angular/common';
import { Component, computed, inject, ViewChild } from '@angular/core';
import { WaterIntake } from '../../core/services/water-intake';
import { FormsModule, NgModel } from '@angular/forms';
import { FormatUnitsPipe } from '../../shared/pipes/format-units-pipe';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule,FormatUnitsPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
    @ViewChild('mountToAddCtrl') usernameCtrl: NgModel;
  private waterIntakeService = inject(WaterIntake);

  public intake$ = this.waterIntakeService.intake$;
  public containers$ = this.waterIntakeService.containers$;

  public amountToAdd: number;
  
  public addManual() {
    this.waterIntakeService.addManual(this.amountToAdd);
    this.usernameCtrl.reset();
  }

  public addContainer(containerName: string) {
    this.waterIntakeService.addContainer(containerName);
  }
 
}

