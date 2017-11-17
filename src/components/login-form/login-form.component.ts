import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account } from '../../models/account';
import { Login } from '../../models/login';
import { AuthService } from '../../providers/auth/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {
  account = {} as Account;
  @Output() loginStatus: EventEmitter<Login>;

  constructor(private authService: AuthService, private navCtrl: NavController) {
    this.loginStatus = new EventEmitter<Login>();
  }

  async login() {
    const result = await this.authService.signIn(this.account);
    this.loginStatus.emit(result);
  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }
}
