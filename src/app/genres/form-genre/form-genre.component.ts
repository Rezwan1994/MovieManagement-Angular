import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { generate } from 'rxjs';
import { firstLeterUpperCase } from 'src/app/validators/firstLetterValidator';
import { genreCreateDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

constructor(private formBuilder:FormBuilder) { }
@Input()
model : genreCreateDTO;
form:FormGroup;

@Output()
onSaveChanges:EventEmitter<genreCreateDTO> = new EventEmitter<genreCreateDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',{
        validators:[Validators.required,Validators.minLength(3),firstLeterUpperCase()]
      }]
    });
    if(this.model != undefined)
    {
        this.form.patchValue(this.model);
    }
    }
    SaveChanges (){
      this.onSaveChanges.emit(this.form.value)
    }
    getErrorFieldMsg(){
      const field = this.form.get('name');
      if(field?.hasError('required'))
      {
        return 'The name is required';
      }
      if(field?.hasError('minlength'))
      {
        return 'The minimum length is 3';
      }
      if(field?.hasError('firstLeterUpperCase'))
      {
        return field.getError('firstLeterUpperCase').message;
      }
      return '';
    }

}
