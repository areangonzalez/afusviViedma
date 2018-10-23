import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'estadisticas-goleadores',
    templateUrl: './goleadores.html'
})
export class GoleadoresComponent implements OnInit {
    //title = 'afusviViedma';
    public listaEquipos = [
        { nombre: 'Defensores de Viedma', partidos_jugados: 7, partidos_ganados: 5, partidos_empatados: 2, partidos_perdidos: 0, goles_favor: 33, goles_contra: 18, diferencia_goles: 15, puntos: 12 },
        { nombre: 'Nueva Genración F.C.', partidos_jugados: 7, partidos_ganados: 4, partidos_empatados: 2, partidos_perdidos: 1, goles_favor: 26, goles_contra: 20, diferencia_goles: 6, puntos: 10 },
        { nombre: 'Los Tios sin T.A.C.C.', partidos_jugados: 7, partidos_ganados: 4, partidos_empatados: 0, partidos_perdidos: 3, goles_favor: 21, goles_contra: 21, diferencia_goles: 0, puntos: 8 },
        { nombre: 'Unidos del Sur', partidos_jugados: 7, partidos_ganados: 3, partidos_empatados: 1, partidos_perdidos: 3, goles_favor: 28, goles_contra: 24, diferencia_goles: 4, puntos: 7 },
        { nombre: 'Deportivo Boulevard', partidos_jugados: 7, partidos_ganados: 2, partidos_empatados: 2, partidos_perdidos: 3, goles_favor: 27, goles_contra: 28, diferencia_goles: -1, puntos: 6 },
        { nombre: 'A.E.C. "B"', partidos_jugados: 7, partidos_ganados: 2, partidos_empatados: 1, partidos_perdidos: 4, goles_favor: 24, goles_contra: 28, diferencia_goles: -4, puntos: 5 },
        { nombre: 'U.N.R.N. Sede Atlántica', partidos_jugados: 7, partidos_ganados: 1, partidos_empatados: 2, partidos_perdidos: 4, goles_favor: 17, goles_contra: 20, diferencia_goles: -3, puntos: 4 },
        { nombre: 'Las Casitas', partidos_jugados: 7, partidos_ganados: 1, partidos_empatados: 2, partidos_perdidos: 4, goles_favor: 20, goles_contra: 37, diferencia_goles: -17, puntos: 4 }
    ];


    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }
}