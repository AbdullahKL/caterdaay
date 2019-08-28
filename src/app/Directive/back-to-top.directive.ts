import {  HostListener, Inject, Component, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: '[appBackToTop]',
  animations: [
    trigger('fadeIn', [
      // ...
      state('open', style({
        height: '200px',
        display: 'none',
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  template: `<ng-content></ng-content>`
})
export class BackToTopDirective {
  public offset = 900;
  public duration = 800;
  public state: String  = 'active';
  @HostBinding('@fadeIn') trigger = '';
  @HostListener('window:scroll', []) scrolling() {
    this.viewportChange();
  }
  viewportChange() {
   

    console.log(this.document.documentElement.scrollTop,'Directive')
   if (this.document.documentElement.scrollTop > this.offset) {
    console.log("Fade In");
    this.trigger  = 'open';
  }
  else {
      console.log("Fade Out");
      this.trigger  = 'close';
  }

  }
  constructor(@Inject(DOCUMENT) private document) { }

}
