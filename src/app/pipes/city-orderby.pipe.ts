import { Pipe, PipeTransform } from '@angular/core';
import { RootObject } from '../models/forecast';

@Pipe({
  name: 'sortBy'
})
export class CityOrderbyPipe implements PipeTransform {

  transform(value: RootObject[] ){
    const values = [...value];

    const sortedArray = values.sort((a,b) => {
      return a.name.localeCompare(b.name);
    })
    return sortedArray;
  }

}
