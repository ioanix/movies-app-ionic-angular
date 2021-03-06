import {Component} from '@angular/core';
import {Movie, MOVIE_GENRES} from '../../models/movie.model';
import {ApiService} from '../../services/api.service';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  MOVIE_GENRES = MOVIE_GENRES;

  movie = new Movie();

  constructor(private apiService: ApiService, private navCtrl: NavController, private alertCtrl: AlertController) {
  }

  addMovie() {
    this.apiService.post('api/Movie', this.movie).subscribe(
      () => {
        this.navCtrl.back();
      },
      (err) => {
        let message = 'Validation error';
        const errorsArray = err?.error?.errors;
        if (errorsArray) {
          message = Object.values(errorsArray)[0] as string;
        }
        this.alertCtrl
          .create({
            header: 'Error',
            message,
            buttons: ['Ok'],
          })
          .then((al) => al.present());
      }
    );
  }
}
