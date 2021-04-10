import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[allowAlphanumeric]'
})
export class AllowAlphaNumericDirective {

  constructor() { }
  
  @HostListener('keypress', ['$event'])
  onKeyPressHandler(event: KeyboardEvent) {
    return false;
  }
}
