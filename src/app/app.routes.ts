import { Routes } from '@angular/router';
import { Movies } from './movies/movies';
import { Movie } from './movie/movie';
import { Home } from './home/home';
import { AgregarMovie } from './agregar-movie/agregar-movie';
import { EditarMovie } from './editar-movie/editar-movie';
import { EliminarMovie } from './eliminar-movie/eliminar-movie';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'movies',
        component: Movies
    },

    {
        path: 'movie/:id',
        component: Movie
    },
    {
        path: 'editarMovie/:id',
        component: EditarMovie
    },
    {
        path: 'agregarMovie',
        component: AgregarMovie
    },
    {
        path: 'eliminarMovie/:id',
        component: EliminarMovie
    }
];
