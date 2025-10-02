import { Component, inject } from '@angular/core';
import { WaterIntake } from '../../core/services/water-intake';
import { CommonModule, DatePipe } from '@angular/common';
import { FormatUnitsPipe } from '../../shared/pipes/format-units-pipe';
import { ContainerTypePipe } from '../../shared/pipes/container-type-pipe';
import { Tile } from '../../shared/components/tile/tile';

@Component({
  selector: 'app-history',
  imports: [DatePipe, FormatUnitsPipe, CommonModule, ContainerTypePipe, Tile],
  templateUrl: './history.html',
  styleUrl: './history.scss'
})
export class History {
private waterIntakeService = inject(WaterIntake);

public intake$ = this.waterIntakeService.intake$;
}
