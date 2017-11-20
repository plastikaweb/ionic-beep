import { Component, EventEmitter, Output } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Account } from '../../models/account';
import { Login } from '../../models/login';
import { AuthService } from '../../providers/auth/auth.service';

@Component({
  selector: 'register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {
  account = {} as Account;
  @Output() registerStatus: EventEmitter<Login>;

  constructor(private authService: AuthService) {
    this.registerStatus = new EventEmitter<Login>();
  }

  async register() {
    try {
      const result: Login = await this.authService.register(this.account);
      this.registerStatus.emit(result);
    } catch (e) {
      console.log(e);
      this.registerStatus.emit(e);
    }
  }

}
