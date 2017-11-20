import { Component } from '@angular/core';
import { User } from 'firebase/app';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Login } from '../../models/login';
import { DataService } from '../../providers/data/data.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private profile$: Subscription;

  constructor(private data: DataService, private navCtrl: NavController, private toast: ToastController) {
  }

  login(event: any) {
    if (!event.error) {
      this.toast.create({
        message: `Welcome to Beep, ${event.result.email}`,
        duration: 3000
      }).present();
      this.profile$ = this.data.getProfile(<User>event.result)
        .snapshotChanges() // return an Observable
        .subscribe(action => {
          console.log(action.payload.val());
          action.payload.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage');
        });
      this.navCtrl.setRoot('EditProfilePage');
    } else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }

}
