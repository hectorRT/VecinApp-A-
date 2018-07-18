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

<<<<<<< HEAD
  constructor(private router: Router, private vecino: VecinoService) { }

<<<<<<< HEAD
  vecinosArray: Vecino;
  vecinosFilter: Array<Vecino> = [];
  vecinosClave: Array<Vecino> = [];
  InputEmail: string ='';
  Password: string ='';
=======
  vecinosArray:Vecino;
  vecinosFilter:Vecino;
  vecinosClave:Array<Vecino>=[];
  InputEmail:string='';
  Password:string='';
>>>>>>> ab95ec40a006e5291b2ec4bf5df31f7503194ebb

  ngOnInit() {
  }
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

  
  buscarVecino()
  {

    this.vecino.getVecinoEmail(this.InputEmail).subscribe(email => {
      this.vecinosArray = email;
      console.log(this.vecinosArray);
      
    });
  }


=======
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
>>>>>>> 1cabd71243343faa5da3b11351564319ee7bf778

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true;
  }
}
