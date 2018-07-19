import { VecinoService } from './../../Servicios/Vecino-Service/vecino.service';
import { Vecino } from './../../Clases/Vecino';

import { Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;


 // constructor(private router: Route, private vecino: VecinoService) {}

  vecinosArray: Vecino;
  vecinosFilter: Array<Vecino> = [];
  vecinosClave: Array<Vecino> = [];
  InputEmail: string = '';
  Password: string = '';

  // vecinosArray: Vecino;
  // vecinosFilter: Vecino;
  // vecinosClave: Array<Vecino> = [];
  // InputEmail: string = '';
  // Password: string = '';


  // ngOnInit() {
  // }
  // loginUser(e) {
  // 	e.preventDefault();
  // 	console.log(e);
  // 	var username = e.target.elements[0].value;
  // 	var password = e.target.elements[1].value;

  // 	if(username == 'admin' && password == 'admin') {
  //     this.user.setUserLoggedIn(username);
  // 		this.router.navigate(['menu']);
  // 	}
  // }


  // buscarVecino()
  // {

  //   this.Vecino.getVecinoEmail(this.InputEmail).subscribe(email => {
  //     this.vecinosArray = email;
  //     console.log(this.vecinosArray);

  //   });
  // }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }


  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true;
  }
}
