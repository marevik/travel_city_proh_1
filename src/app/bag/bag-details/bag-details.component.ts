import { Component, OnInit, Input } from '@angular/core';
import { Bag } from '../bag.model';

@Component({
  selector: 'app-bag-details',
  templateUrl: './bag-details.component.html',
  styleUrls: ['./bag-details.component.css']
})
export class BagDetailsComponent implements OnInit {

  @Input()
  currentBag:Bag;
  constructor() { }

  ngOnInit() {
  }

}
