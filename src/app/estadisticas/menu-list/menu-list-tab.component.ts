import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu-list-tab',
    templateUrl: './menu-list-tab.html'
})
export class MenuListTabComponent implements OnInit {

    constructor(
        private _router: Router
    ) { }

    ngOnInit() {
    }


}