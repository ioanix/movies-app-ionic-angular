import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side.menu.component.html',
  styleUrls: ['./side.menu.component.scss'],
})
export class SideMenuComponent {

  constructor(private authService: AuthService) { }

  logOut() {

    this.authService.removeToken();
  }
}
