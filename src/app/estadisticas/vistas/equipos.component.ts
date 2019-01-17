import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/core/services';
import { ListaEquipos, Jugador } from 'src/app/core/models';
import { Observable } from 'rxjs';

@Component({
    selector: 'estadisticas-equipos',
    templateUrl: './equipos.html',
    styleUrls: ['./vistas.css']
})
export class EquiposComponent implements OnInit {

  constructor(
    private _equipoService: EquipoService
  ){}

    public listaEquipos: ListaEquipos;
    public jugadores: Jugador;

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
      this.obtenerEquipos();
      this.obtenerJugadores();
    }


    private obtenerEquipos() {
      this._equipoService.equiposDelTorneo(2).subscribe(
        datos => {
          this.listaEquipos = datos;
        }, error => {
          console.log('UPS hubo un error', error);
        });
      }

      private obtenerJugadores() {
        let equipos = "[{'id':'639'}]"; // [{id:639},{id:637},{id:640}]
        this._equipoService.jugadoresDelTorneo(2, [639,637,640])
        .subscribe(
          datos => {
            this.jugadores = datos;
            console.log(datos);
        }, error => {
          console.log('UPS ha ocurrido un error: ', error);
        });
    }

}
