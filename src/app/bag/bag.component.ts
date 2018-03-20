import { Component, OnInit, Input } from '@angular/core';
import { Bag } from './bag.model';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  bags: Bag[] = [
  new Bag("LONDON", "Expensive city", "London", "src", 2000), 
  new Bag("OSLO", "Interesting city", "Oslo", "src", 1100),
  new Bag("SIDNEY", "Great city", "Sidney", "src", 1500),
  new Bag("LOS ANGELES", "Favorite city", "Los Angeles", "https://www.discoverlosangeles.com/sites/default/files/styles/article_image/public/Activities/Points%20of%20Interest/downtown-la-skyline.jpg?itok=71QRDUKL" ,  1000)
];

  currentBag: Bag = new Bag("", "", "", "", "");

  isOpenDetails: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  openBagDetails(bag) {
    this.currentBag = bag;
    this.isOpenDetails = true;
  }

}
