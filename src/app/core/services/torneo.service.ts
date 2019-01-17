import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Torneo, ListaEquipos, Jugador } from "../models";
import { map } from 'rxjs/operators';
import { stringify } from "@angular/core/src/render3/util";

@Injectable()
export class TorneoService {

  constructor(
    private _apiService: ApiService
  ){}

  get(): Observable<Torneo> {
    return this._apiService.get('/torneo');
  }

}
