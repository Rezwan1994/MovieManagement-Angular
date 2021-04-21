import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLeterUpperCase } from 'src/app/validators/firstLetterValidator';
import { genreCreateDTO } from '../genres.model';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router:Router) { }
 
  ngOnInit(): void {

  }
  SaveChanges (genreCreateDTO:genreCreateDTO){
    console.log(genreCreateDTO);
    this.router.navigate(["/genres"]);
  }


}
