import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationInterceptorService } from './interceptors/authorization-interceptor.service';
import { LocalStorageService } from '../shared/services/local-storage.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthorizationInterceptorService, LocalStorageService]
})
export class CoreModule { }
