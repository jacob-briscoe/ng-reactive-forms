import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  fullName = new FormControl("", Validators.required);

  constructor(fb: FormBuilder){
    this.form = fb.group({
      'fullName': this.fullName,
      'password': ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Form was submitted!');
    console.log(this.form);
  }
}
