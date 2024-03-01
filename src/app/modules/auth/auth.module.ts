import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [AuthComponent, SignInFormComponent, SignInPageComponent],
  providers: [LocalStorageService, AuthService]
})
export class AuthModule { }
