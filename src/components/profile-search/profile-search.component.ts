import { Component, EventEmitter, Output } from '@angular/core';
import { Profile } from '../../models/profile';
import { DataService } from '../../providers/data/data.service';

@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent {
  query: string;
  profileList: Profile[];
  @Output() selectedProfile: EventEmitter<Profile>;

  constructor(private data: DataService) {
    this.selectedProfile = new EventEmitter<Profile>();
  }

  searchUser() {
    const trimmedQuery = this.query.trim();
    this.data.searchUser(trimmedQuery).subscribe((profiles: Profile[]) => {
      this.profileList = profiles;
    });
  }

  selectProfile(profile: Profile) {
    this.selectedProfile.emit(profile);
  }
}
