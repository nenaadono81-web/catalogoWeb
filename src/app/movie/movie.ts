import { Component, OnInit, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

import { MovieService } from '../services/movie';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class Movie implements OnInit {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  private router = inject(Router);

  movie: any = null;
  ngOnInit(): void {
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.movieService
      .getMovie(id)
      .subscribe((data) => {
        this.movie = data;
      });
  }

  deleteMovie(id: number){
    if(confirm('¿Deseas eliminar esta película?')){
      this.movieService
        .deleteMovie(id)
        .subscribe(() => {
          this.router.navigate(['/movies']);
        });
    }
  }
}
