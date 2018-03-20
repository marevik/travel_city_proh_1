import { Component, OnInit, Input } from '@angular/core';
import { Bag } from '../bag.model';

@Component({
  selector: 'app-bag-item',
  templateUrl: './bag-item.component.html',
  styleUrls: ['./bag-item.component.css']
})
export class BagItemComponent implements OnInit {

  @Input()
    bag: Bag;
  
  constructor() { }

  ngOnInit() {
  }

}
