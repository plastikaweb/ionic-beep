import { Component } from '@angular/core';
import { DataService } from '../../providers/data/data.service';
import { Profile } from '../../models/profile';

@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent {
  query: string;
  profileList: Profile[];

  constructor(private data: DataService) {}

  searchUser() {
    this.data.searchUser(this.query).subscribe((profiles: Profile[]) => {
      this.profileList = profiles;
    });
  }
}
