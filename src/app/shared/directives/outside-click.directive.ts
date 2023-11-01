import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appOutsideClick]'
})
export class OutsideClickDirective {

  constructor(private elementRef: ElementRef) {}

  @Output()
  outsideClick: EventEmitter<MouseEvent> = new EventEmitter();

  @HostListener('document:mousedown', ['$event'])
  onClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.outsideClick.emit(event);
    }
  }

}
