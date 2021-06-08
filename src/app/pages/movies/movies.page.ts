import {Component} from '@angular/core';
import {Movie} from '../../models/movie.model';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies-page.page.html',
  styleUrls: ['./movies-page.page.scss'],
})
export class MoviesPage {

  movies: Movie[];

  constructor(private apiService: ApiService, private router: Router) {}

  ionViewWillEnter() {

    this.loadMovies();
  }

  goToAddMovie() {

    this.router.navigateByUrl('movies/add');
  }

  deleteMovie(movie: Movie) {

    this.apiService.delete('api/movie/' + movie.id).subscribe(() => {

      this.loadMovies();
    });
  }

  private loadMovies() {

    this.apiService.get('api/Movie').subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }
}
