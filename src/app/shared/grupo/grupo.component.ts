import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-grupo',
    templateUrl: './grupo.component.html',
    styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
    @Input("equipos") public datosEquipos:any;
    @Input("mostrarPromedio") public mostrarPromedio:boolean;


    ngOnInit(){
    }
    
    /**
     * Se calcula el promedio a partir de los puntos 
     * divido los partidos jugados
     * @param partidosJugados 
     * @param puntos 
     */
    calcularPromedio(partidosJugados, puntos) {
        let num = (parseInt(puntos) / parseInt(partidosJugados));
        return num.toFixed(4);
    }

    /**
     * la diferencia de goles es calculada a partir de los goles a favor
     * menos los goles encontra
     * @param golesFavor 
     * @param golesContra 
     */
    diferenciaGoles(golesFavor, golesContra) {
        let num = (parseInt(golesFavor) - parseInt(golesContra));
        return num;
    }
}
