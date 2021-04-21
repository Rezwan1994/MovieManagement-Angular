import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }
  @Input()
  selectedRate = 0;
  @Output()
  onRating : EventEmitter<number> = new EventEmitter<number>();

  maxRating = 5
  priviousSelectedRate = 0;
  maxRatingArr = [0];

  ngOnInit(): void {
    this.maxRatingArr= Array(this.maxRating).fill(0)
  }

  handleMouseEnter(index:number)
  {
    this.selectedRate= index + 1;
  }
  handleMouseLeave(index:number)
  {
    if(this.priviousSelectedRate != 0)
    {
        this.selectedRate = this.priviousSelectedRate;
    }
    else
    {
      this.selectedRate = 0;
    }
   
  }
  rate(index:number)
  {
    this.selectedRate = index+1;
    this.priviousSelectedRate = this.selectedRate;
    this.onRating.emit(this.selectedRate);
  }

}
