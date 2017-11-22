import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { User } from 'firebase/app';
import 'rxjs/add/operator/take';
import { Profile } from '../../models/profile';

@Injectable()
export class DataService {
  profileObj: AngularFireObject<Profile>;
  profileList: AngularFireList<Profile[]>;

  constructor(private db: AngularFireDatabase) {}

  getProfile(user: User) {
    this.profileObj = this.db.object(`/profiles/${user.uid}`);
    return this.profileObj;
  }

  searchUser(query: string) {
    return this.db.list('/profiles', ref =>
      ref.orderByChild('firstName').equalTo(query)).valueChanges();
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
