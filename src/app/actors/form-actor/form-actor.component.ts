import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { actorCreationDTO, actorDTO } from './actor.module';
import { Input } from '@angular/core';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {
constructor(private formBuilder:FormBuilder) { }

 form: FormGroup;
 @Input()
 model: actorDTO;
 @Output()
 onSaveChanges:EventEmitter<actorCreationDTO> = new EventEmitter<actorCreationDTO>();
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',{
        validators:[Validators.required]
      }],
      dateofbirth:'',
      picture:''
    })
    if(this.model != undefined)
    {
      this.form.patchValue(this.model);
    }
  }
  onImageSelected(file:File){
      this.form.get('picture')?.setValue(file);
  }
  SaveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}
