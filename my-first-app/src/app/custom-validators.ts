import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static invalidProjectName = 'Test';

  static invalidProjectNameValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value.toLowerCase() === CustomValidators.invalidProjectName.toLowerCase()) {
      return {
        projectNameIsForbidden: true,
      };
    }

    return null;
  }

  static invalidProjectNameValidatorAsync(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (
          // because of this we need to bind, else it will not get access to this.invalidProjectName
          control.value.toLowerCase() === CustomValidators.invalidProjectName.toLowerCase()
        ) {
          resolve({ projectNameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1200);
    });

    return promise;
  }
}
