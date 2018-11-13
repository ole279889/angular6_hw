import {AbstractControl, ValidatorFn} from '@angular/forms';

export class AppValidators {
  public static lettersOnly(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (/^[a-zA-Zа-яА-Я]*$/.test(control.value)) {
        return null;
      }
      return {lettersOnly: {text: 'Value invalid. The value should pass /^[a-zA-Zа-яА-Я]*$/ validation'}};
    };
  }
}