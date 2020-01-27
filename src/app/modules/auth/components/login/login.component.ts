import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../../services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginserv: LoginserviceService) { }

  ngOnInit() {
  }
  login(){
    this.loginserv.loginWithGoogle();
  }
  logout(){
    this.loginserv.logoutwithgoogle();
  }
}
