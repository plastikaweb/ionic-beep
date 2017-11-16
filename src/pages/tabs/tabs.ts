import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {
  tab1Root: string;
  tab2Root: string;
  tab3Root: string;

  ngOnInit() {
    this.tab1Root = 'InboxPage';
    this.tab2Root = 'ChannelsPage';
    this.tab3Root = 'ProfilePage';
  }


}
