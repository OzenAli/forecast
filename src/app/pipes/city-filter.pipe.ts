import { Pipe, PipeTransform } from '@angular/core';
import { RootObject } from '../models/forecast';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

  transform(cities: RootObject[], filterText: string): RootObject[] {
    
    if (!cities || !filterText) {
      return cities;
    }
    return cities.filter(cities => cities.name.toLowerCase().includes(filterText.toLowerCase()));
  }

}
