import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(value: any[]): any[] {
    if (!value) {
      return value;
    }

    // Use a Set to remove duplicates
    return Array.from(new Set(value));
  }

}
