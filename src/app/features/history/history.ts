import { Component, inject } from '@angular/core';
import { WaterIntake } from '../../core/services/water-intake';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.html',
  styleUrl: './history.scss'
})
export class History {
private waterIntakeService = inject(WaterIntake);

public intake$ = this.waterIntakeService.intake$;
}
