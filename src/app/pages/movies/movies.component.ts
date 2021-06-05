import {Component} from '@angular/core';
import {Movie} from '../../models/movie.model';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {

  movies: Movie[];

  constructor(private apiService: ApiService, private router: Router) {}

  ionViewWillEnter() {

    this.apiService.get('api/Movie').subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  goToAddMovie() {

    this.router.navigateByUrl('movies/add');
  }
}
