import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
// export class DropdownDirective {
//   isOpened = false;

//   constructor(private elRef: ElementRef, private renderer: Renderer2) {}

//   @HostListener('click') toggleDropdown() {
//     if (this.isOpened) {
//       this.renderer.removeClass(this.elRef.nativeElement, 'open');
//       this.isOpened = false;
//     } else {
//       this.renderer.addClass(this.elRef.nativeElement, 'open');
//       this.isOpened = true;
//     }
//   }
// }
export class DropdownDirective {
  constructor(private elRef: ElementRef) {}

  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleDropdown(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
