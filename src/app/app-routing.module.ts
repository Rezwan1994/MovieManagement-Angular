import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexActorComponent } from './actors/index-actor/index-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { EditTheaterComponent } from './theater/edit-theater/edit-theater.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';

import { HomeComponent } from './home/home.component';
import { CreateMovietheaterComponent } from './theater/create-movietheater/create-movietheater.component';
import { IndexMovietheaterComponent } from './theater/index-movietheater/index-movietheater.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'genres',component:IndexGenresComponent},
 {path:'genres/create-genre',component:CreateGenreComponent},
 {path:'genres/edit/:id',component:EditGenresComponent},

 {path:'actors',component:IndexActorComponent},
 {path:'actors/create-actor',component:CreateActorComponent},
 {path:'actors/edit/:id',component:EditActorComponent},

 {path:'theater',component:IndexMovietheaterComponent},
 {path:'theater/create-movietheater',component:CreateMovietheaterComponent},
 {path:'theater/edit/:id',component:EditTheaterComponent},

 {path:'movie/filter',component:MovieFilterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
