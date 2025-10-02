import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatUnits'
})
export class FormatUnitsPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 1000) return (value / 1000).toFixed(2) + ' L';
    return value + ' ml';
  }

}
