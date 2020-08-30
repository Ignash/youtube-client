import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[borderColor]'
})
export class BorderColorDirective implements OnInit {

  @Input() public date: string;

  constructor( private el: ElementRef ) {
  }

  public ngOnInit(): void {
    this.el.nativeElement.style.borderColor = this.getColor;
  }

  public get getColor(): string {
    let dateNow: Date = new Date();
    let statusDate: Date = new Date(this.date);
    let timeDiff: number = dateNow.getTime() - statusDate.getTime();
    let diffDays: number = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if ( diffDays < 7) {
      return 'blue';
    }
    if ( diffDays < 31) {
      return 'green';
    }
    if ( diffDays < 180) {
      return 'yellow';
    }
    if ( diffDays >= 180) {
      return 'red';
    }

  }

}
