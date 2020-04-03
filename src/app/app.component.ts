import { Component } from '@angular/core';
import { equal } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName ='';
  userReset='';
  userNameStatus='Please enter username:';


  onResetName() {
    this.userNameStatus='Please enter new username:'

  }

  userResetStatus(){
    this.userReset='Username was reset!'

  }


  }

  



