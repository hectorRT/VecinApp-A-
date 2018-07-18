import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { VecinoService } from '../../Servicios/Vecino-Service/vecino.service';
import { Vecino } from '../../Clases/Vecino';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private vecino: VecinoService) { }

  vecinosArray: Vecino;
  vecinosFilter: Array<Vecino> = [];
  vecinosClave: Array<Vecino> = [];
  InputEmail: string ='';
  Password: string ='';

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



}
