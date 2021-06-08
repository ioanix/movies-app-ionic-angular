import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginPage} from './pages/login/login.page';
import {MoviesPage} from './pages/movies/movies.page';
import {AddMoviePage} from './pages/add-movie/add-movie.page';
import {ReservationsPage} from './pages/reservations/reservations.page';
import {DetailsMoviePage} from './pages/movie-details/movie-details.page';
import {EditMoviePage} from "./pages/edit-movie/edit-movie.page";

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'movies',
    component: MoviesPage,
  },
  {
    path: 'movies/add',
    component: AddMoviePage,
  },
  {
    path: 'movies/details',
    component: DetailsMoviePage,
  },
  {
    path: 'movies/edit',
    component: EditMoviePage,
  },
  {
    path: 'reservations',
    component: ReservationsPage,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
