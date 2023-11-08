import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentageCalc'
})
export class PercentageCalcPipe implements PipeTransform {

  transform(value: number, percentage: number): String {
    return (value * percentage * 0.01).toFixed(2);
  }

}
