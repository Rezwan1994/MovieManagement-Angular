import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  constructor() { }
  @Output()
  changeMarkDown = new EventEmitter<string>();
  
  @Input()
  markDownContent:string ='' ;
  ngOnInit(): void {
  }

}
