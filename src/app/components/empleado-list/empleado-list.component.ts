import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';


@Component({
    selector: 'app-empleado-list',
    templateUrl: './empleado-list.component.html',
    styleUrls: ['./empleado-list.component.css'],
})
export class EmpleadoListComponent implements OnInit {
    listEmpleados: Empleado[] = [
        { legajo: 1, nombre:'Homero', apellido: 'Simpsom', sexo: 'Masculino', salario: 100 },
        { legajo: 4, nombre:'Lisa', apellido: 'Simpsom', sexo: 'Femenino', salario: 30 },
        { legajo: 2, nombre:'Mongomery', apellido: 'Bear', sexo: 'Masculino', salario: 90 },
        { legajo: 3, nombre:'Carl', apellido: 'Lewis', sexo: 'Masculino', salario: 80 },
        { legajo: 4, nombre:'Profesora', apellido: 'Cravaple', sexo: 'Femenino', salario: 70 }
    ]
    constructor() { }

    ngOnInit(): void { }

    obtenerTotalEmpleados(): number {
        return this.listEmpleados.length;
    }

    obtenerTotalFemeninos(): number {
        return this.listEmpleados.filter( list => list.sexo === 'Femenino').length;
    }

    obtenerTotalMasculino(): number {
        return this.listEmpleados.filter( list => list.sexo === 'Masculino').length;
    }

}


