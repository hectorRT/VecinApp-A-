
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import { BehaviorSubject } from 'rxjs';
import { AlertService, AuthenticationService } from '../_services/index';


@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
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
                    if (data[0].Email == this.model.Email && data[0].Clave == this.model.Clave) {
                        this.authenticationService.asig(data);
                        this.authenticationService.cargartrue();
                        localStorage.setItem('token', data[0].Email);
                        this.router.navigate([this.returnUrl]);                       
                    }
                }
            }
        })
        

    }
}