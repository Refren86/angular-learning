import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUsernames = ['Chris', 'Anna'];

  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        // 1st - value; 2nd - validation, 3rd - async validators
        username: new FormControl('', [
          Validators.required,
          this.forbiddenNamesValidator.bind(this),
        ]),
        email: new FormControl(
          '',
          [Validators.required, Validators.email],
          this.forbiddenEmailsValidator
        ),
      }),
      gender: new FormControl(this.genders[0]),
      hobbies: new FormArray([]),
    });

    // Value change listener
    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log('Changed value: ', value);
    // });
    // Status change listener - valid, invalid, pending
    this.signupForm.statusChanges.subscribe((status) => {
      console.log('Changed status: ', status);
    });

    // Setting form values programmatically
    // this.signupForm.setValue({
    //   userData: {
    //     username: 'Refren',
    //     email: 'refren@test.com',
    //   },
    //   gender: 'male',
    //   hobbies: [],
    // });

    // Setting specific form fields values
    this.signupForm.patchValue({
      userData: {
        email: 'test@test.xiaom',
      },
    });
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNamesValidator(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {
        nameIsForbidden: true,
      };
    }

    return null; // successful validation
  }

  forbiddenEmailsValidator(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, rej) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }
}
