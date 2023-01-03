import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';


@Component({
    selector: 'app-empleado-list',
    templateUrl: './empleado-list.component.html',
    styleUrls: ['./empleado-list.component.css'],
})
export class EmpleadoListComponent implements OnInit {
    listEmpleados: Empleado[] = [

    ]
    constructor() { }

    ngOnInit(): void { }
}
