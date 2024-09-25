import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlighterPipe implements PipeTransform {
  transform(value: string, search: string): string {
    if (!search) {
      return value;
    }

    const regex = new RegExp(`(${search})`, 'gi');
    return value.replace(regex, `<strong>$1</strong>`);//or use <mark> tag instead of strong to highlight it
  }
}
