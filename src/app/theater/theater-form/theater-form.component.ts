import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { theaterCreationDTO } from '../theater.module';


@Component({
  selector: 'app-theater-form',
  templateUrl: './theater-form.component.html',
  styleUrls: ['./theater-form.component.css']
})
export class TheaterFormComponent implements OnInit {

  constructor(private formBuiilder:FormBuilder) { }
  @Input()
  model:theaterCreationDTO;
  @Output()
  onSaveChanges = new EventEmitter<theaterCreationDTO>()
  form:FormGroup;
  ngOnInit(): void {
    this.form = this.formBuiilder.group({
      name:['',{
        validators:[Validators.required]
      }]
    })
    if(this.model != undefined)
    {
      this.form.patchValue(this.model)
    }
  }
  saveChanges(){
    this.onSaveChanges.emit(this.form.value)
  }

}
