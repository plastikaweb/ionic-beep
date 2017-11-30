import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'firebase';
import { Loading, LoadingController } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { AuthService } from '../../providers/auth/auth.service';
import { DataService } from '../../providers/data/data.service';

@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit {
  userProfile: Profile;
  private authUser: User;
  private loader: Loading;

  @Output() existingProfile: EventEmitter<Profile>;

  constructor(private data: DataService, private auth: AuthService, private loading: LoadingController) {
    this.existingProfile = new EventEmitter<Profile>();
    this.loader = this.loading.create({
      content: 'Loading profile...'
    });
  }

  ngOnInit() {
    this.loader.present();
    this.auth.getAuthenticateduser()
      .subscribe(
        (user: User) => this.data.getProfile(user)
          .snapshotChanges()
          .subscribe((action) => {
            this.loader.dismiss();
            this.userProfile = <Profile>action.payload.val();
            this.existingProfile.emit(this.userProfile);
          }))
    ;
  }
}
