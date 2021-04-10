import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[allowNumeric]'
})
export class AllowNumericDirective {

  @Input('allowDecimal') period: boolean = false;

  constructor() { }
  
  /** 
   * Performs a check on whether a key press event on the keyboard is a number or not.
   * If yes, it allows the user to enter the value otherwise disables entering the value
   *
   * @param event the KB key press event
   * @returns ASCII code of the key pressed on KB
   */
  @HostListener('keypress', ['$event'])
  onKeyPressHandler(event: KeyboardEvent) {
    if (this.period) {
      return ((event.charCode >= 48) && (event.charCode <= 57) || (event.charCode === 46));
    } else {
      return ((event.charCode >= 48) && (event.charCode <= 57));
    }
  }
}
