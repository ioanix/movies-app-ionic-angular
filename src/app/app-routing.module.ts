import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginPage} from './pages/login/login.page';
import {MoviesComponent} from './pages/movies/movies.component';
import {AddMovieComponent} from './pages/add-movie/add-movie.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/add',
    component: AddMovieComponent,
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
