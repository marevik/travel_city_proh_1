import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output()
  onOpenLink = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  openLink(link){
    this.onOpenLink.emit(link);
  }

}
