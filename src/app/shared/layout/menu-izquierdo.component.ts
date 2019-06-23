import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'menu-izquierdo',
    templateUrl: './menu-izquierdo.component.html',
    styleUrls: ['./menu-izquierdo.css']
})
export class MenuIzquierdoComponent implements OnInit {

    public isCollapsed = true;

    constructor(
        private _router: Router
    ) { }

    ngOnInit() {
    }
}
