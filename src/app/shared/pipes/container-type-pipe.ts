import { Pipe, PipeTransform } from '@angular/core';
import { WaterEntryModel } from '../models';

@Pipe({
  name: 'containerType'
})
export class ContainerTypePipe implements PipeTransform {

  transform(value: WaterEntryModel): string {
    return value.type === 'manual' ? 'Manual' : value.containerId! ;
  }

}
