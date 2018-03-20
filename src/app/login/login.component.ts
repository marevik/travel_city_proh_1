import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
  }
color="blue";
  setColor(color){
    this.color=color;
  }

  value=2;
// var d1=3;
//   switch (d1) {
//     case 1:
//        console.log('1');
//        break;
//     case 2:
//        console.log('2');
//        break;
//     case 3:
//        console.log('3');
//        break;
//     case 4:
//        console.log('4');
//        break;
    
//     default:
//        console.log("mdaa")
//     };
}
