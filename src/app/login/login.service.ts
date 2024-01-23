import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://freeapi.miniprojectideas.com/api/User/Login"

  constructor(private http:HttpClient, public router:Router) { }

  loginUser(userObj:any) {
    this.http.post(this.url, userObj).subscribe(
      (res: any) => {
        if (res.result) {
          console.log("res")
          localStorage.setItem('loginToken', res.data.token)
          alert("Login Successful")
          this.router.navigateByUrl("/dashboard")
        } else {
          alert(res.message)
        }
      }
    )
  }

}
