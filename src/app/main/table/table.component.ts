import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  nombre: string;
  apellido: string;
  email: string;
  clase: number;
  curso: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nombre: 'David', apellido: 'Alcaraz', email: 'daal_777@hotmail.com', clase: 123456, curso: 'Angular'},
  {nombre: 'Ruben', apellido: 'Mendes', email: 'ruben12@hotmail.com', clase: 123456, curso: 'Angular'},
  {nombre: 'María', apellido: 'Gimenez', email: 'maria72@hotmail.com', clase: 123456, curso: 'Angular'},
  {nombre: 'Pablo', apellido: 'Gonzalez', email: 'pablo82@hotmail.com', clase: 123456, curso: 'Angular'},
  {nombre: 'José', apellido: 'Suarez', email: 'jose76@hotmail.com', clase: 123456, curso: 'Angular'},
  {nombre: 'Julián', apellido: 'Lopez', email: 'julian19@hotmail.com', clase: 123456, curso: 'Angular'},
  {nombre: 'Andrea', apellido: 'Espejo', email: 'andrea94@hotmail.com', clase: 123456, curso: 'Angular'},
  {nombre: 'Carolina', apellido: 'Silva', email: 'caro17@hotmail.com', clase: 123456, curso: 'Angular'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    displayedColumns: string[] = ['nombre', 'apellido', 'email', 'clase', 'curso', 'accion'];
    dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
