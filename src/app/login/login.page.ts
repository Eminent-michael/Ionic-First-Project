import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    EmailId: new FormControl(''),
    Password: new FormControl('')
  })

  constructor(private loginServ: LoginService) {
    this.onLogin
  }

  ngOnInit() {
  }

  onLogin() {
    this.loginServ.loginUser(this.loginForm.value)
  }


}
