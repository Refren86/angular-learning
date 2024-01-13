import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root', // our own html tag
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  invalidProjectName = 'Test';

  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        '',
        [
          Validators.required,
          // CustomValidators.invalidProjectNameValidator
          // this.forbiddenProjectNameValidator.bind(this),
        ],
        // this.forbiddenProjectNameValidatorAsync.bind(this)
        CustomValidators.invalidProjectNameValidatorAsync
      ),
      email: new FormControl('', [Validators.email, Validators.required]),
      projectStatus: new FormControl(this.projectStatuses[0]),
    });
  }

  // forbiddenProjectNameValidator(control: FormControl): {
  //   [s: string]: boolean;
  // } {
  //   if (control.value.toLowerCase() === this.invalidProjectName.toLowerCase()) {
  //     return {
  //       projectNameIsForbidden: true,
  //     };
  //   }

  //   return null;
  // }

  // forbiddenProjectNameValidatorAsync(
  //   control: FormControl
  // ): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (
  //         // because of this we need to bind, else it will not get access to this.invalidProjectName
  //         control.value.toLowerCase() === this.invalidProjectName.toLowerCase()
  //       ) {
  //         resolve({ projectNameIsForbidden: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1200);
  //   });

  //   return promise;
  // }

  onSubmit() {
    console.log(this.projectForm);
  }
}
