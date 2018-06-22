import { catchError, tap } from "rxjs/operators";

import { Observable } from "rxjs/observable";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import {of} from "rxjs/observable/of";

import { Vecino } from "../../Clases/Vecino";

import { Injectable } from '@angular/core';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class VecinosService {

  private VecinoUrl="http://localhost:3000/vecinos";
  constructor( private http:HttpClient) { }

  
}
