import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { MessagePage } from './message';

@NgModule({
  declarations: [
    MessagePage
  ],
  imports: [
    IonicPageModule.forChild(MessagePage),
    ComponentsModule
  ]
})
export class MessagePageModule {}
