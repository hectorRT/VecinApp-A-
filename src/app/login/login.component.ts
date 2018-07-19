import { VecinoService } from './../../Servicios/Vecino-Service/vecino.service';
import { Vecino } from './../../Clases/Vecino';

import { Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs';
import { AlertService, AuthenticationService } from '../_services/index';
=======
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AuthService } from './../auth/auth.service';
>>>>>>> 66a65f5ac05ebea7c92f95955ba57e24b5ee1208

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
<<<<<<< HEAD
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        this.loggedIn.next(true);
      return this.loggedIn.asObservable();
    }

    login() {
        this.loading = true;
        // this.authenticationService.login(this.model.username, this.model.password)
        //     .subscribe(
        //         data => {
            localStorage.setItem('currentUser', JSON.stringify("admin"));
                    this.router.navigate([this.returnUrl]);

                    this.authenticationService.cargartrue();

                // },
                // error => {
                //     this.alertService.error(error);
                //     this.loading = false;
                // });
=======
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
>>>>>>> 66a65f5ac05ebea7c92f95955ba57e24b5ee1208
    }
}
