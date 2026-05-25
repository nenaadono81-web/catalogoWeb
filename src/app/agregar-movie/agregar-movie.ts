import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MovieService } from '../services/movie';

@Component({
  selector: 'app-agregar-movie',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './agregar-movie.html',
  styleUrl: './agregar-movie.css',
})

export class AgregarMovie {
  private movieService = inject(MovieService);
  private router = inject(Router);

  movie = {
    title: '',
    synopsis: '',
    year: '',
    cover: ''
  };

  guardarMovie(){

    this.movieService
      .addMovie(this.movie)
      .subscribe(() => {
        this.router.navigate(['/']);
      });

  }

}
