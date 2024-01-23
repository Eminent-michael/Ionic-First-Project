import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  private url = "http://freeapi.miniprojectideas.com/api/User/GetAllUsers"

  users: any[] = [];


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(
      (res: any) => {
        console.log(res)
        this.users = res.data
      }
    )
  }

}
