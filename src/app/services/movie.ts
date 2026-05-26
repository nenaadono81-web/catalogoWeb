import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);
  private apiUrl = 'https://catalogo-production-96a9.up.railway.app/api';
  //private apiUrl = 'http://127.0.0.1:8000/api';

  getMovies() {
    return this.http.get<any[]>(`${this.apiUrl}/allMovies`);
  }

  getMovie(id: number){
    return this.http.get<any>(`${this.apiUrl}/movie/${id}`);
  }

  addMovie(movie: any){
    return this.http.post(
      `${this.apiUrl}/guardar`,
      movie
    );

  }

  updateMovie(id: number, movie: any){
    return this.http.put(
      `${this.apiUrl}/actualizar/${id}`,
      movie
    );
  }

  deleteMovie(id: number){
    return this.http.delete(
      `${this.apiUrl}/eliminar/${id}`
    );

  }

}
