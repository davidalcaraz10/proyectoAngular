import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumnos } from 'src/app/interfaces/alumnos';
import { AlumnosService } from 'src/app/services/alumnos.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  alumnosData: Alumnos[] = [];


    displayedColumns: string[] = ['nombre', 'apellido', 'email', 'clase', 'curso', 'accion'];
    dataSource!: MatTableDataSource<any>;

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.alumnosData = this.alumnosService.getAlumno();
    this.dataSource = new MatTableDataSource(this.alumnosData);
  }

}
