import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    ComponentsModule,
    AngularFireAuthModule
  ]
})
export class RegisterPageModule {}
