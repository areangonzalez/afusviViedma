import { Injectable } from "@angular/core";
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { ListaEquipos, Jugador } from "../models";
import { map } from 'rxjs/operators';

@Injectable()
export class EquipoService {

  constructor(
    private _apiService: ApiService
  ){}

  /* get(id_torneo:number): Observable<Equipo> {
    return this._apiService.get('/torneo')
      .pipe(map(data => data.article));
  } */

  equiposDelTorneo(id_torneo): Observable<ListaEquipos> {
    const params = { 'data': 'equipos', 'id_torneo': id_torneo }
    let httpParams = new HttpParams();

    for (const key in params) {
      httpParams = httpParams.append(key.toString(), params[key].toString());
    }
    return this._apiService.get('/torneo',httpParams);
  }

  jugadoresDelTorneo(id_torneo, equipos): Observable<Jugador> {
    const params = { 'equipos': equipos, 'id_temporada': id_torneo, 'data': 'deportistas' };
    let httpParams = new HttpParams();

    for (const key in params) {
        httpParams = httpParams.append(key.toString(), params[key].toString());
      }
      console.log(httpParams);
    return this._apiService.get('/deportista',httpParams);
  }

}
