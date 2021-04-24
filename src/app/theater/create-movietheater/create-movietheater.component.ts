import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { theaterCreationDTO } from '../theater.module';

@Component({
  selector: 'app-create-movietheater',
  templateUrl: './create-movietheater.component.html',
  styleUrls: ['./create-movietheater.component.css']
})
export class CreateMovietheaterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

    
  }
  SaveChanges(theaterCreationDTO:theaterCreationDTO){
    console.log(theaterCreationDTO);
  }
}
