import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-torneos',
    templateUrl: './torneos.component.html',
    //styleUrls: ['./inicio.component.css']
})
export class TorneosComponent implements OnInit {
    //title = 'afusviViedma';
    public listaEquiposZona_1 = [
        { nombre: 'A.E.C. "A"', partidos_jugados: 6, partidos_ganados: 6, partidos_empatados: 0, partidos_perdidos: 0, goles_favor: 23, goles_contra: 9, diferencia_goles: 14, puntos: 12 },
        { nombre: 'Deportivo del Sur', partidos_jugados: 6, partidos_ganados: 4, partidos_empatados: 1, partidos_perdidos: 1, goles_favor: 17, goles_contra: 15, diferencia_goles: 2, puntos: 9 },
        { nombre: 'Los Pekes Futsal', partidos_jugados: 6, partidos_ganados: 3, partidos_empatados: 1, partidos_perdidos: 2, goles_favor: 18, goles_contra: 15, diferencia_goles: 3, puntos: 7 },
        { nombre: 'Barrio Sud F.S.', partidos_jugados: 6, partidos_ganados: 3, partidos_empatados: 0, partidos_perdidos: 3, goles_favor: 18, goles_contra: 15, diferencia_goles: 3, puntos: 6 },
        { nombre: 'Deportivo Los Compadres Viedma', partidos_jugados: 6, partidos_ganados: 2, partidos_empatados: 0, partidos_perdidos: 4, goles_favor: 16, goles_contra: 17, diferencia_goles: -1, puntos: 4 },
        { nombre: 'Churretes F.C.', partidos_jugados: 6, partidos_ganados: 1, partidos_empatados: 0, partidos_perdidos: 5, goles_favor: 14, goles_contra: 24, diferencia_goles: -10, puntos: 2 },
        { nombre: 'Fuerte al Medio', partidos_jugados: 6, partidos_ganados: 1, partidos_empatados: 0, partidos_perdidos: 5, goles_favor: 10, goles_contra: 21, diferencia_goles: -11, puntos: 2 }
    ];

    public listaEquiposZona_2 = [
        { nombre: 'Defensores de Viedma', partidos_jugados: 7, partidos_ganados: 5, partidos_empatados: 2, partidos_perdidos: 0, goles_favor: 33, goles_contra: 18, diferencia_goles: 15, puntos: 12 },
        { nombre: 'Nueva Genración F.C.', partidos_jugados: 7, partidos_ganados: 4, partidos_empatados: 2, partidos_perdidos: 1, goles_favor: 26, goles_contra: 20, diferencia_goles: 6, puntos: 10 },
        { nombre: 'Los Tios sin T.A.C.C.', partidos_jugados: 7, partidos_ganados: 4, partidos_empatados: 0, partidos_perdidos: 3, goles_favor: 21, goles_contra: 21, diferencia_goles: 0, puntos: 8 },
        { nombre: 'Unidos del Sur', partidos_jugados: 7, partidos_ganados: 3, partidos_empatados: 1, partidos_perdidos: 3, goles_favor: 28, goles_contra: 24, diferencia_goles: 4, puntos: 7 },
        { nombre: 'Deportivo Boulevard', partidos_jugados: 7, partidos_ganados: 2, partidos_empatados: 2, partidos_perdidos: 3, goles_favor: 27, goles_contra: 28, diferencia_goles: -1, puntos: 6 },
        { nombre: 'A.E.C. "B"', partidos_jugados: 7, partidos_ganados: 2, partidos_empatados: 1, partidos_perdidos: 4, goles_favor: 24, goles_contra: 28, diferencia_goles: -4, puntos: 5 },
        { nombre: 'U.N.R.N. Sede Atlántica', partidos_jugados: 7, partidos_ganados: 1, partidos_empatados: 2, partidos_perdidos: 4, goles_favor: 17, goles_contra: 20, diferencia_goles: -3, puntos: 4 },
        { nombre: 'Las Casitas', partidos_jugados: 7, partidos_ganados: 1, partidos_empatados: 2, partidos_perdidos: 4, goles_favor: 20, goles_contra: 37, diferencia_goles: -17, puntos: 4 }
    ];

    constructor(){}


    ngOnInit(): void {
    }

}
