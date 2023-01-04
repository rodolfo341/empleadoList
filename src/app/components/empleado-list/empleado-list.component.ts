import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';


@Component({
    selector: 'app-empleado-list',
    templateUrl: './empleado-list.component.html',
    styleUrls: ['./empleado-list.component.css'],
})
export class EmpleadoListComponent implements OnInit {
    listEmpleados: Empleado[] = [
        { legajo: 1, nombre:'Homero', apellido: 'Simpsom', sexo: 'm', salario: 100 },
        { legajo: 2, nombre:'Mongomery', apellido: 'Bear', sexo: 'm', salario: 90 },
        { legajo: 3, nombre:'Carl', apellido: 'Lewis', sexo: 'm', salario: 80 },
        { legajo: 4, nombre:'Profesora', apellido: 'Cravaple', sexo: 'f', salario: 70 }
    ]
    constructor() { }

    ngOnInit(): void { }
}
