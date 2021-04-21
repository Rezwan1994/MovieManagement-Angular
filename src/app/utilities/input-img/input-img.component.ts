import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { toBase64 } from '../util';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }
  @Input()
  urlCurrentImage : any;

  @Output()
  onImageSelected = new EventEmitter<File>();

  imagebase64 : string
  ngOnInit(): void {
  }
  change(event:any)
  {
    if(event.target.files.length> 0)
    {
        const file:File = event.target.files[0];
        toBase64(file).then((value:any)=>this.imagebase64 = value);
        this.onImageSelected.emit(file);
        this.urlCurrentImage = "";
    }
  }
}
