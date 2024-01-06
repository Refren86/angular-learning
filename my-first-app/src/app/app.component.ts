import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('formRef', { static: false }) simpleForm: NgForm;

  defaultSubscription = 'advanced';

  submitted = false;

  email = '';
  subscription = '';
  password = '';

  onSubmit() {
    this.email = this.simpleForm.value.email;
    this.subscription = this.simpleForm.value.subscription;
    this.password = this.simpleForm.value.password;

    this.submitted = true;

    console.log(this.simpleForm.value);
  }
}
