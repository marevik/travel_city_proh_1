import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BagComponent } from './bag/bag.component';
import { TourComponent } from './tour/tour.component';
import { ProfileComponent } from './profile/profile.component';
import { TourItemComponent } from './tour/tour-item/tour-item.component';
import { TourDetailsComponent } from './tour/tour-details/tour-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BagDetailsComponent } from './bag/bag-details/bag-details.component';
import { BagItemComponent } from './bag/bag-item/bag-item.component';
import { GameComponent } from './game/game.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { OrangeColorDirective } from './orange-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BagComponent,
    TourComponent,
    ProfileComponent,
    TourItemComponent,
    TourDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    BagDetailsComponent,
    BagItemComponent,
    GameComponent,
    OddComponent,
    EvenComponent,
    OrangeColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
