import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';
import { AppHeader } from '../app-header/app-header';
import { AppFooter } from '../app-footer/app-footer';

import { MovieService } from '../services/movie';

@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.html',
    styleUrls: ['./movies.css'],
    imports: [ CommonModule, RouterModule, AppHeader, AppFooter]
})

export class Movies implements OnInit {
    movies: any[] = [];
    private movieService = inject(MovieService);
    
    ngOnInit(): void {
        setTimeout(() => {
            this.loadMovies();
        }, 500);
    }

    loadMovies() {
        this.movieService
                .getMovies()
                .subscribe((data) => {
                    this.movies = data;

            });
    }

    deleteMovie(id: number){
        if(confirm('¿Deseas eliminar esta película?')){
            this.movieService
                .deleteMovie(id)
                .subscribe(() => {
                this.loadMovies();
                });
        }
    }
}