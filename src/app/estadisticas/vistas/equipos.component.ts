import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'estadisticas-equipos',
    templateUrl: './equipos.html'
})
export class EquiposComponent implements OnInit {
    //title = 'afusviViedma';
    public listaEquipos = [
        { id: 1, nombre: 'A.E.C. "A"' },
        { id: 10, nombre: 'A.E.C. "B"' },
        { id: 8, nombre: 'Barrio Sud F.S.' },
        { id: 14, nombre: 'Churretes F.C.' },
        { id: 2, nombre: 'Defensores de Viedma' },
        { id: 9, nombre: 'Deportivo Boulevard' },
        { id: 11, nombre: 'Deportivo Los Compadres Viedma' },
        { id: 3, nombre: 'Deportivo del Sur' },
        { id: 15, nombre: 'Fuerte al Medio' },
        { id: 13, nombre: 'Las Casitas' },
        { id: 5, nombre: 'Los Pekes Futsal' },
        { id: 6, nombre: 'Los Tios sin T.A.C.C.' },
        { id: 4, nombre: 'Nueva Genración F.C.' },
        { id: 12, nombre: 'U.N.R.N. Sede Atlántica' },
        { id: 7, nombre: 'Unidos del Sur' },
    ];


    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }
}