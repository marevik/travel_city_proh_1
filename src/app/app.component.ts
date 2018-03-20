import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers:number[]=[];
  evenNumbers:number[]=[];

  onIntervalFired(firedNumber:number){
    if(firedNumber%2===0){
      this.evenNumbers.push(firedNumber);
    } else{
      this.oddNumbers.push(firedNumber);
    }
  }




















  title = 'app';
  isOpenTours:boolean=true;


  openLink(link){
    if(link==="tours"){
      this.isOpenTours=true;
    } else{
      this.isOpenTours=false;
    }
  }
}
