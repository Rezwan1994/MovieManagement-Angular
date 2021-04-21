import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { actorCreationDTO } from '../form-actor/actor.module';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  SaveChanges(actorCreationDTO:actorCreationDTO){
    console.log("dfs");
    console.log(actorCreationDTO);
  }
}
