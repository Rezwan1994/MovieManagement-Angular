import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilities/rating/rating.component';

@Component({
  selector: 'app-life-cycle-event',
  templateUrl: './life-cycle-event.component.html',
  styleUrls: ['./life-cycle-event.component.css']
})
export class LifeCycleEventComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterViewInit {
  @Input()
  title: any;
  @ViewChild(RatingComponent)
  Rating:any
  timer: any
//Is not a life cycle event.
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('On destroy');
    clearInterval(this.timer);
  }

  ngDoCheck(): void {
    console.log('do check');
  }
  
  ngAfterViewInit(): void {
    console.log('after view init');
    console.log(this.Rating);
  }
  
  ngOnInit(): void {
    console.log('on init');
    this.timer = setInterval(() =>{
      console.log(new Date)
    },1000)
  }
}
