import {Component} from '@angular/core';
import {Movie, MOVIE_GENRES} from '../../models/movie.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: 'movie-details.page.html',
})
export class DetailsMoviePage {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  MOVIE_GENRES = MOVIE_GENRES;

  movie = new Movie();

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.movie = JSON.parse(params.special);
      }
    });
  }
}
