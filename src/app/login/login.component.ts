
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs';
import { AlertService, AuthenticationService } from '../_services/index';
import { Vecino } from '../../Clases/Vecino';
import { Frecuencia } from '../../Clases/FrecuenciaPago';
import { FrecuenciaPagoService } from '../../Servicios/Frecuencia/frecuencia-pago.service';
import {VecinoService} from '../../Servicios/Vecino-Service/vecino.service';


@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    registrando = false;
    usuario: Vecino = {};
    frecuenciaArray:Array<Frecuencia>=[];
    frecuencia:Array<Frecuencia>=[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private frecuenciaServicios:FrecuenciaPagoService,
        private vecinoServicio: VecinoService
    ) { }

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

    onRegistrar() {
        this.getFrecuencias();
        this.registrando = !this.registrando;
    }

    getFrecuencias()
{
  this.frecuenciaServicios.getFrecuencia().subscribe(res=>{
    console.log(res);
    this.frecuencia=res;
     this.frecuenciaArray=this.frecuencia;
     console.log(this.frecuenciaArray);
  })
}

addVecino(data) {

    this.usuario.Nombres = data.value.nombreInput;
    this.usuario.Apellidos = data.value.apellidosInput;
    this.usuario.Cedula = data.value.cedulaInput;
    this.usuario.Email = data.value.emailInput;
    this.usuario.Clave=data.value.claveInput;
    this.usuario.Direccion =data.value.direccionInput;
    this.usuario.Idfrecuencia=data.value.FrecuenciaSelect;
    this.usuario.IdCargo=4;

      this.vecinoServicio.addVecino(this.usuario).subscribe(res => {
        console.log(res);
        this.usuario.IdVecino = res.data.insertId;
        this.model.Email = this.usuario.Email;
        this.model.Clave = this.usuario.Clave;
        this.registrando = false;
      });     

  }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model).subscribe(data => {
           
            if (data[0] == undefined) {
                this.loading = false;
                alert("No se logeo");
            } else {
                if (data[0].Clave != this.model.Clave) {
                    this.loading = false;
                    alert("No Coinciden");
                } else {
                    this.loading = false;
                    if (data[0].Email == this.model.Email && data[0].Clave == this.model.Clave){
                        this.authenticationService.cargartrue(data);
                        setInterval(() => {
                            this.router.navigate([this.returnUrl]); 
                          }, 100);
                               
                    }
                }
            }
        })
        

    }
}