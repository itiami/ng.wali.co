import { Directive, ElementRef, Renderer2, OnInit, AfterViewInit } from '@angular/core';


@Directive({
  selector: '[highlightOperators]'
})
export class HighlightOperatorsDirective implements OnInit, AfterViewInit {
  private operators = [
    '+', '-', '*', '/', '%', '++', '--',
    '=', '+=', '-=', '*=', '/=', '%=',
    '==', '===', '!=', '!==', '>', '<', '>=', '<=',
    '&&', '||', '!',
    '&', '|', '^', '~', '<<', '>>', '>>>',
    '?',
    'typeof',
    'delete',
    'void',
    'in',
    'instanceof',
    'new',
    'this',
    '...',
    '?.',
  ];


  constructor(private el: ElementRef) {

  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {

  }


}
