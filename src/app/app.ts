import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from "./features/dashboard/dashboard";
import { Tile } from "./shared/components/tile/tile";
import { Containers } from "./features/containers/containers";
import { History } from "./features/history/history";

@Component({
  selector: 'app-root',
  imports: [Dashboard, Tile, Containers, History],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'water-tracker';
}
