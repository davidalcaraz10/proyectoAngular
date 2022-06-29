import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioAlumnos = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    clase: ['', [Validators.required, Validators.minLength(6)]],
    curso: ['', [Validators.required, Validators.minLength(5)]],
  })


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  agregarUsuario() {
    const user = {
      nombre: this.formularioAlumnos.value.nombre,
      apellido: this.formularioAlumnos.value.apellido,
      email: this.formularioAlumnos.value.email,
      clase: this.formularioAlumnos.value.clase,
      curso: this.formularioAlumnos.value.curso,
    }
    console.log(user)
  }

}
