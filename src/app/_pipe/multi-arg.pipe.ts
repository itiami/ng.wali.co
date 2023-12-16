import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiArg'
})
export class MultiArgPipe implements PipeTransform {

  transform(date: Date, locale: string = 'en-US', style: string = 'long'): string {
    const options: Intl.DateTimeFormatOptions = {
      ...(style === 'long' && { year: 'numeric', month: 'long', day: 'numeric' }),
      ...(style === 'short' && { year: 'numeric', month: 'short', day: 'numeric' })
    };

    return new Intl.DateTimeFormat(locale, options).format(date);
  }


}
