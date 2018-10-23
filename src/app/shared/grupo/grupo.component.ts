import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-grupo',
    templateUrl: './grupo.component.html',
    styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
    @Input("equipos") public datosEquipos:any;


    ngOnInit(){
    }
}
