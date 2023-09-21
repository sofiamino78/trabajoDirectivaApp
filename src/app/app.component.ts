import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = "";
  registrado = false;
  nombre: string = "";
  apellido: string = "";
  cargo: string = "";
  entradas: object[];


  constructor() {
    this.entradas = [
      {titulo:"Python cada día más presente."},
      {titulo:"Java presente desde hace más de 30 años."},
      {titulo:"JavaScript cada vez más funcional."},
      {titulo:"Kotlin potencia para tus Apps."},
      {titulo:"¿Donde quedó Pascal?"}
    ]
  }

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = "te has registrado correctamente!";
  }
}
