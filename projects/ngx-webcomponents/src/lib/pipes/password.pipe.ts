import { Pipe, PipeTransform } from '@angular/core';

/**
 * @author Swetank Mohanty (shortthirdman)
 * @description Pipe to replace the value with * or specified character.
 */

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, replaceChar?: string): any | string {
    if (value === undefined) {
      return value;
    }
	
    // Replace with the specified character
    if (replaceChar) {
      return replaceChar.repeat(value.length);
    }
    // Replace value with asterisks
    return '*'.repeat(value.length);
  }

}
