import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nuevoComentario: string = '';  // Esta es la propiedad que usas con ngModel
  comentarios: string[] = [];  // Lista para almacenar los comentarios

  // Método que agrega el comentario a la lista
  agregarComentario(): void {
    if (this.nuevoComentario.trim()) {  // Verifica que no esté vacío
      this.comentarios.push(this.nuevoComentario);  // Agrega el comentario
      this.nuevoComentario = '';  // Limpia el campo
    }
  }
}
