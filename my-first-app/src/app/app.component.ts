import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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
        username: new FormControl('', [Validators.required, this.forbiddenNamesValidator.bind(this)]), // 1st - value; 2nd - validation, 3rd - async validators
        email: new FormControl('', [Validators.required, Validators.email]),
      }),
      gender: new FormControl(this.genders[0]),
      hobbies: new FormArray([]),
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

  onSubmit() {
    console.log(this.signupForm);
  }
}
