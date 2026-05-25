import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieService } from '../services/movie';

@Component({
  selector: 'app-editar-movie',
  imports: [FormsModule],
  templateUrl: './editar-movie.html',
  styleUrl: './editar-movie.css',
})
export class EditarMovie implements OnInit{
  private movieService = inject(MovieService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  id!: number;
  movie = {
    title: '',
    synopsis: '',
    year: '',
    cover: ''
  };

  ngOnInit(): void {
    this.id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.movieService
      .getMovie(this.id)
      .subscribe((data) => {
        this.movie = data;
      });
  }

  editarMovie(){
    this.movieService
      .updateMovie(this.id, this.movie)
      .subscribe(() => {
        this.router.navigate(['/movies']);
      });
  }
}
