import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComentariosService } from './comentarios.service';  // Importamos el servicio

@Component({
  selector: 'app-comentarios',
  standalone: true,  // Este componente es independiente
  imports: [FormsModule],  // No necesitamos CommonModule ya que es parte de standalone
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  comentarios: string[] = [];  // Lista de comentarios
  nuevoComentario: string = '';  // Variable para el comentario nuevo

  constructor(private comentariosService: ComentariosService) {}

  ngOnInit(): void {
    this.cargarComentarios();  // Cargar los comentarios al inicializar el componente
  }

  // Método para cargar los comentarios
  cargarComentarios(): void {
    this.comentariosService.obtenerComentarios().subscribe(
      (comentarios: string[]) => {
        this.comentarios = comentarios;
      },
      (error: any) => {
        console.error('Error al cargar los comentarios:', error);
      }
    );
  }

  // Método que agrega el comentario
  agregarComentario(): void {
    if (this.nuevoComentario.trim()) {  // Verifica que el comentario no esté vacío
      this.comentariosService.agregarComentario(this.nuevoComentario).subscribe(
        () => {
          this.nuevoComentario = '';  // Limpia el campo de texto
          this.cargarComentarios();  // Recarga los comentarios
        },
        (error: any) => {
          console.error('Error al agregar el comentario:', error);
        }
      );
    }
  }
}
