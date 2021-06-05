import {Component} from '@angular/core';
import {Movie, movieGenres} from '../../models/movie.model';
import {ApiService} from '../../services/api.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent {

  movieGenres = movieGenres;

  movie = new Movie();

  constructor(private apiService: ApiService, private navCtrl: NavController) {
  }

  addMovie() {

    this.apiService.post('api/Movie', this.movie).subscribe(() => {

      this.navCtrl.back();
    });
  }

  // backToMovies() {
  //   this.navCtrl.back();
  // }
}
