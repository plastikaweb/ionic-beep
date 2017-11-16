import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {
  constructor(private navCtrl: NavController) {
  }

  navigateToPage(page: string) {
    page === 'TabsPage' ? this.navCtrl.setRoot(page) : this.navCtrl.push(page);
  }
}
