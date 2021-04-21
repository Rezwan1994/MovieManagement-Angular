import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { genreCreateDTO } from '../genres.model';

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrls: ['./edit-genres.component.css']
})
export class EditGenresComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute) { 

  }
 model: genreCreateDTO ={name:"Rezwan"}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params =>{
      alert(params.id);
   })
  }
  SaveChanges(){

  }

}
