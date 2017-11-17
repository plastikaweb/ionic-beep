import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Login } from '../../models/login';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(private navCtrl: NavController, private toast: ToastController) {
  }

  login(event: Login) {
    if (!event.error) {
      this.toast.create({
        message: `Welcome to Beep, ${event.result.email}`,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('ProfilePage');
    } else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }

}
