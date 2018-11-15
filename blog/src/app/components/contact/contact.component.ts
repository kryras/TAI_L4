import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // person = {
  //   name: '',
  //   surname: '',
  //   email: '',
  //   sex: '',
  //   description: '',
  //   age: '',
  //
  // };

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    maritalStatus: new FormControl('', [Validators.required]),
  })

  reset() {
    this.form.reset();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
