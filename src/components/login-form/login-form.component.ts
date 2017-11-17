import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from 'ionic-angular';
import { Account } from '../../models/account';
import { Login } from '../../models/login';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {
  account = {} as Account;
  @Output() loginStatus: EventEmitter<Login>;

  constructor(private firebaseAuth: AngularFireAuth, private navCtrl: NavController) {
    this.loginStatus = new EventEmitter<Login>();
  }

  async login() {
    try {
      const result: Login = {
        result: await this.firebaseAuth.auth
          .signInWithEmailAndPassword(this.account.email, this.account.password)
      };
      this.loginStatus.emit(result);
    } catch (err) {
      console.log(err);
      const error: Login = {
        error: err
      };
      this.loginStatus.emit(error);
    }
  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }
}
