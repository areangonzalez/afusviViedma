import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Torneo, ListaEquipos } from "../models";
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

  equiposDelTorneo(id_torneo): Observable<ListaEquipos> {
    const params = { 'data': 'equipos', 'id_torneo': id_torneo }
    let httpParams = new HttpParams();

    for (const key in params) {
      httpParams = httpParams.append(key.toString(), params[key].toString());
    }
    return this._apiService.get('/torneo',httpParams);
  }

}
