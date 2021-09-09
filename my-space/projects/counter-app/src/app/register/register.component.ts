import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('some value', [
    Validators.required
  ])
  registerForm : FormGroup;

  constructor(private fb : FormBuilder) {
    this.registerForm=this.fb.group({
      username : this.username
    })
   }

  ngOnInit(): void {
  }

}
