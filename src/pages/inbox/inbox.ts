import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { messagesList } from '../../mocks/messages.mock';
import { Message } from '../../models/message';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  messagesList: Message[] = messagesList;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.messagesList);
  }

  navigateToSearchUserPage() {
    this.navCtrl.push('SearchUserPage');
  }

}
