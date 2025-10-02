import { Component, inject } from '@angular/core';
import { WaterIntake } from '../../core/services/water-intake';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tile } from '../../shared/components/tile/tile';

@Component({
  selector: 'app-containers',
  imports: [CommonModule, FormsModule,Tile],
  templateUrl: './containers.html',
  styleUrl: './containers.scss'
})
export class Containers {
private waterIntakeService = inject(WaterIntake);

public containers$ = this.waterIntakeService.containers$;

public containerName: string;
public containerSize: number;


public addContainer(): void {
  if(!!this.containerName && this.containerSize > 0){
    this.waterIntakeService.addCustomContainer(this.containerName, this.containerSize);
  this.containerName = '';
  this.containerSize = 0;
  }
}
}
