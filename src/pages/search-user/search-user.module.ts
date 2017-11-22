import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { SearchUserPage } from './search-user';

@NgModule({
  declarations: [
    SearchUserPage
  ],
  imports: [
    IonicPageModule.forChild(SearchUserPage),
    ComponentsModule
  ]
})
export class SearchUserPageModule {}
