import { Component } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage {

  reservation;

  constructor(private apiSvc: ApiService) {}

  ionViewWillEnter() {
    this.apiSvc.get('api/Reservations').subscribe((response) => {
      this.reservation = response;
    });
  }

}
