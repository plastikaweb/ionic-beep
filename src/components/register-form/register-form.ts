import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import { Account } from '../../models/account';

@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {
  account = {} as Account;

  constructor(private firebaseAuth: AngularFireAuth, private toast: ToastController) {}

  async register() {
    try {
      const result = await this.firebaseAuth.auth
        .createUserWithEmailAndPassword(this.account.email, this.account.password);
      this.toast.create({
        message: 'Account created',
        duration: 3000
      }).present();
      console.log(result);
    } catch (err) {
      this.toast.create({
        message: err,
        duration: 3000
      }).present();
    }
  }

}
