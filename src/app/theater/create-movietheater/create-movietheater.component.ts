import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movietheater',
  templateUrl: './create-movietheater.component.html',
  styleUrls: ['./create-movietheater.component.css']
})
export class CreateMovietheaterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  SaveChanges(){
    this.router.navigate(["/theater"])
  }
}
