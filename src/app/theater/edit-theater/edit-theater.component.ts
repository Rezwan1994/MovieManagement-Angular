import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { theaterCreationDTO } from '../theater.module';

@Component({
  selector: 'app-edit-theater',
  templateUrl: './edit-theater.component.html',
  styleUrls: ['./edit-theater.component.css']
})
export class EditTheaterComponent implements OnInit {

  constructor(private acivateRoute:ActivatedRoute) { }
  model: theaterCreationDTO ={name:"Rezwan"}
  ngOnInit(): void {
    this.acivateRoute.params.subscribe(params => {
      alert(params.id);
    })
  
  }
  SaveChanges(theaterCreationDTO:theaterCreationDTO){
      console.log(theaterCreationDTO);
  }
}
