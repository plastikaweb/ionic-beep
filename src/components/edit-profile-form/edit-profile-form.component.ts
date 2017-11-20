import { Component, OnDestroy } from '@angular/core';
import { User } from 'firebase';
import { Subscription } from 'rxjs/Subscription';
import { Profile } from '../../models/profile';
import { AuthService } from '../../providers/auth/auth.service';
import { DataService } from '../../providers/data/data.service';

@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy {
  private authenticatedUser$: Subscription;
  private authenticateduser: User;
  profile = {} as Profile;

  constructor(private data: DataService, private auth: AuthService) {
    this.authenticatedUser$ = this.auth.getAuthenticateduser()
      .subscribe((user: User) => {
        this.authenticateduser = user;
      });
  }

  ngOnDestroy() {
    this.authenticatedUser$.unsubscribe();
  }

  async saveProfile() {
    if (this.authenticateduser) {
      this.profile.email = this.authenticateduser.email;
      const result = await this.data.saveProfile(this.authenticateduser, this.profile);
      console.log(result);
    }
  }
}
