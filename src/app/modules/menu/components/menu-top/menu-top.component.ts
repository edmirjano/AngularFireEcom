import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/modules/auth/services/loginservice.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  user: firebase.User;
  constructor(private login: LoginserviceService) { }

  ngOnInit() {
    this.login.getCurrentUser().subscribe(
      data=>{
        this.user=data;
      }
    )
  }
  logout(){
    this.login.logoutwithgoogle();
  }
}
