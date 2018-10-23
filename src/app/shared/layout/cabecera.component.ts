import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'cabecera',
    templateUrl: './cabecera.html',
    styleUrls: ['./cabecera.css']
})
export class CabeceraComponent implements OnInit {

    public isCollapsed = true;

    constructor(
        private _router: Router
    ) { }

    ngOnInit() {
    }


}
