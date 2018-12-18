import { Component, OnInit } from '@angular/core';
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-fixture',
    templateUrl: './fixture.component.html',
    styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
    public equiposFixture: any[] = [
        { equipo_zona_1: { nombre: 'A.E.C. "A"', escudo_img_url: '../../../assets/img/64x64.svg' }, equipo_zona_2: { nombre: 'Defensores de Viedma', escudo_img_url: '../../../assets/img/64x64.svg' }, fecha: '2018-09-22', horario: '20:00', lugar: 'Atenas', veedores: 'Compadres / F.A.M.' },
        { equipo_zona_1: { nombre: 'Deportivo del Sur', escudo_img_url: '../../../assets/img/64x64.svg' }, equipo_zona_2: { nombre: 'Nueva Genración F.C.', escudo_img_url: '../../../assets/img/64x64.svg' }, fecha: '2018-09-22', horario: '21:00', lugar: 'Atenas', veedores: 'A.E.C. "B" / N.G.' },
        { equipo_zona_1: { nombre: 'Los Pekes Futsal', escudo_img_url: '../../../assets/img/64x64.svg' }, equipo_zona_2: { nombre: 'Los Tios sin T.A.C.C.', escudo_img_url: '../../../assets/img/64x64.svg' }, fecha: '2018-09-22', horario: '22:00', lugar: 'Atenas', veedores: 'Los Pekes / A.E.C. "A"' },
        { equipo_zona_1: { nombre: 'Barrio Sud F.S.', escudo_img_url: '../../../assets/img/64x64.svg' }, equipo_zona_2: { nombre: 'Unidos del Sur', escudo_img_url: '../../../assets/img/64x64.svg' }, fecha: '2018-09-22', horario: '23:00', lugar: 'Atenas', veedores: 'Barrio Sud / Churretes' },
        { equipo_zona_1: { nombre: 'Deportivo Los Compadres Viedma', escudo_img_url: '../../../assets/img/64x64.svg' }, equipo_zona_2: { nombre: 'Deportivo Boulevard', escudo_img_url: '../../../assets/img/64x64.svg' }, fecha: '2018-09-23', horario: '21:00', lugar: 'Atenas', veedores: 'Las Casitas / Boulevard' },
        { equipo_zona_1: { nombre: 'Churretes F.C.', escudo_img_url: '../../../assets/img/64x64.svg' }, equipo_zona_2: { nombre: 'A.E.C. "B"', escudo_img_url: '../../../assets/img/64x64.svg' }, fecha: '2018-09-23', horario: '22:00', lugar: 'Atenas', veedores: 'U.N.R.N. / Los Tios' },
        { equipo_zona_1: { nombre: 'Fuerte al Medio', escudo_img_url: '../../../assets/img/64x64.svg' }, equipo_zona_2: { nombre: 'U.N.R.N. Sede Atlántica', escudo_img_url: '../../../assets/img/64x64.svg' }, fecha: '2018-09-23', horario: '23:00', lugar: 'Atenas', veedores: 'Unidos / Defensores' },
        { equipo_zona_1: { nombre: '', escudo_img_url: '' }, equipo_zona_2: { nombre: 'Las Casitas', escudo_img_url: '../../../assets/img/64x64.svg' }, fecha: '', horario: '', lugar: '', veedores: '' },
    ];


    images = [1, 2, 3,4,5,6,7,8].map(() => `../../../assets/img/futsal3.jpg`);
    //  images = [1].map(() => `../../../assets/img/futsal3.jpg`);

    ngOnInit() {
    }
}
