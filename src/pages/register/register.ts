import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';
import { Login } from '../../models/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(private toast: ToastController) {}

  register(event: Login) {
    if (!event.error) {
      this.toast.create({
        message: `Registration completed, ${event.result.email}`,
        duration: 3000
      }).present();
    } else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }

}
