import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './auth/auth.service';
import {AppComponent} from './app.component';
import {UserLoginComponent} from './auth/user-login/user-login.component';
import {UserInfoComponent} from './auth/user-info/user-info.component';

export const firebaseConfig = {
    apiKey: "AIzaSyD1ygm3eyijEibcgfAHxpc4wh_EzuxpALU",
    authDomain: "login-90542.firebaseapp.com",
    databaseURL: "https://login-90542.firebaseio.com",
    projectId: "login-90542",
    storageBucket: "login-90542.appspot.com",
    messagingSenderId: "937228674343"
};

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}