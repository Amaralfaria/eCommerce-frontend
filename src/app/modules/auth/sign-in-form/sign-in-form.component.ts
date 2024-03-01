import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/user'
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  constructor(private authSerice: AuthService, private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm){
    let user: User ={
      "email": form.value.email,
      "password": form.value.password
    };
    this.authSerice.getJWT(user).subscribe((data: any) => {
      this.localStorageService.setItem('access_tkn',data.access)
      this.localStorageService.setItem('refresh_tkn',data.refresh)
      this.router.navigate(['home/'])
    })
  }

}
