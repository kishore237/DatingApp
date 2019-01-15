import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, private alerify: AlertifyService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alerify.success('Logged in Sucessfuly');
    },
    error => {
      this.alerify.error(error);
    }
    );
  }


  loggedIn() {
     const token = localStorage.getItem('token');
     return !!token;
   }


   logout() {
     localStorage.removeItem('token');
     this.alerify.message('logged out');
   }


}
