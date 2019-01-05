import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
//import { Equipo } from "../models";
import { map } from 'rxjs/operators';

@Injectable()
export class EquipoService {

  /* constructor(
    private _apiService: ApiService
  ){}

  get(id_torneo:number): Observable<Equipo> {
    return this._apiService.get('/torneo')
      .pipe(map(data => data.article));
  }

  getAll(id_torneo: number): Observable<{equipo: Equipo[]}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {id_torneo: id_torneo, data: 'equipos'};

    Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];
    });

    return this.apiService
    .get('/torneo',new HttpParams({ params }));
  } */

}
