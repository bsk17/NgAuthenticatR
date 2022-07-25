import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  logout(){
    localStorage.removeItem('login-token');
    this.router.navigateByUrl('/login');
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('login-token') == null){
      this.logout();
    }
  }

}
