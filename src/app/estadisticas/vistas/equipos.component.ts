import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/core/services';
import { ListaEquipos } from 'src/app/core/models';

@Component({
    selector: 'estadisticas-equipos',
    templateUrl: './equipos.html',
    styleUrls: ['./vistas.css']
})
export class EquiposComponent implements OnInit {

  constructor(
    private _torneoService: TorneoService
  ){}

    public listaEquipos: ListaEquipos;


    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
      this.equipos();
    }


    private equipos(){
      this._torneoService.equiposDelTorneo(2).subscribe(
        datos => {
          this.listaEquipos = datos;
        }, error => {
          console.log('UPS hubo un error', error);
        });
    }
}
