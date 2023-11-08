// highlight.directive.ts

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }

}
