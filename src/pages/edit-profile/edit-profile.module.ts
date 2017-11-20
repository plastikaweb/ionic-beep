import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { EditProfilePage } from './edit-profile';

@NgModule({
  declarations: [
    EditProfilePage
  ],
  imports: [
    IonicPageModule.forChild(EditProfilePage),
    ComponentsModule
  ]
})
export class EditProfilePageModule {}
