import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginPage} from './pages/login/login.page';
import {MoviesPage} from './pages/movies/movies.page';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SideMenuComponent} from './components/side.menu/side.menu.component';
import {ApiService} from './services/api.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AddMoviePage} from './pages/add-movie/add-movie.page';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {TokenInterceptor} from './interceptors/auth-token.interceptor';
import {ReservationsPage} from './pages/reservations/reservations.page';
import {DetailsMoviePage} from './pages/movie-details/movie-details.page';
import {EditMoviePage} from './pages/edit-movie/edit-movie.page';

@NgModule({
  declarations: [AppComponent,
    LoginPage,
    MoviesPage,
    ReservationsPage,
    NavbarComponent,
    SideMenuComponent,
    AddMoviePage,
    DetailsMoviePage,
    EditMoviePage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, ApiService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
