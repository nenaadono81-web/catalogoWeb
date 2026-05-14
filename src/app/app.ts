import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movies } from './movies/movies';
import { Movie } from './movie/movie';
import { AppHeader } from './app-header/app-header';
import { AppFooter } from './app-footer/app-footer';
import { DescCatalogo } from './desc-catalogo/desc-catalogo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Movies, Movie, AppHeader, AppFooter, DescCatalogo,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('catalogoWeb');
}
