import { Component } from '@angular/core';
import { Profile } from '../../models/profile';
import { DataService } from '../../providers/data/data.service';

@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent {
  query: string;
  profileList: Profile[];

  constructor(private data: DataService) {}

  searchUser() {
    const trimmedQuery = this.query.trim();
    this.data.searchUser(trimmedQuery).subscribe((profiles: Profile[]) => {
      this.profileList = profiles;
    });
  }
}
