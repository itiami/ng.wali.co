export const strInterpulation = `{{title}}`

export const dataBindg2Way = `## In component.html
<div>Your Name is: {{fnameInputRes}}</div>
<div>
    <input #fname type="text" placeholder="Your Name">
</div>

// in component.ts
fnameInputRes!: string;

constructor(private elementRef: ElementRef) { };

@ViewChild('fname')
fname!: ElementRef<HTMLInputElement>

@HostListener('keyup.enter')
onKeyEnter() {
  console.log(this.fname.nativeElement.value);
  // or to send thid fname back to html, 
  // create a variable i.g fnameInputRes & call in html inside {{}}
  this.fnameInputRes = this.fname.nativeElement.value;
}
`