import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile';
import 'rxjs/add/operator/take';

@Injectable()
export class DataService {
  profileObj: AngularFireObject<Profile>;

  constructor(private db: AngularFireDatabase) {}

  getProfile(user: User) {
    this.profileObj = this.db.object(`/profiles/${user.uid}`);
    return this.profileObj;
  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObj = this.db.object(`/profiles/${user.uid}`);
    try {
      await this.profileObj.set(profile);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}
