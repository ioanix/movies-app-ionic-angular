import {Movie, MOVIE_GENRES} from '../../models/movie.model';
import {ApiService} from '../../services/api.service';
import {AlertController, NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Component} from '@angular/core';

@Component({
  selector: 'app-edit-movie',
  templateUrl: 'edit-movie.page.html',
})
export class EditMoviePage {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  MOVIE_GENRES = MOVIE_GENRES;

  movie = new Movie();

  constructor(
    private apiSvc: ApiService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.movie = JSON.parse(params.special);
      }
    });
  }

  editMovie(movie: Movie) {
    this.apiSvc.put(`api/Movie/${this.movie.id}`, movie).subscribe(
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

