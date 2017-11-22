import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [ LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent ],
  imports: [ IonicModule, FormsModule ],
  exports: [ LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent ]
})
export class ComponentsModule {}
