import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO } from '../form-actor/actor.module';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }
  model:actorCreationDTO ={name:"Rezwan",dateofbirth: new Date()}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      alert(params.id);
    })
  }
  saveChanges(actorCreationDTO:actorCreationDTO){
      console.log(actorCreationDTO);
  }
}
