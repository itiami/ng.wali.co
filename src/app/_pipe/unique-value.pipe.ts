import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueValue'
})
export class UniqueValuePipe implements PipeTransform {

  transform(value: any[], propertyName: string): any[] {
    if (value !== undefined) {
      return value.filter((e, i) => value.findIndex(a => a[propertyName] === e[propertyName]) === i);
    } else {
      return value;
    }
  }

}
