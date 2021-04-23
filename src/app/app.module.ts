import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {MarkdownModule} from 'ngx-markdown'
import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { LifeCycleEventComponent } from './life-cycle-event/life-cycle-event.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorComponent } from './actors/index-actor/index-actor.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexMoviesComponent } from './movies/index-movies/index-movies.component';
import { CreateMoviesComponent } from './movies/create-movies/create-movies.component';
import { IndexMovietheaterComponent } from './theater/index-movietheater/index-movietheater.component';
import { CreateMovietheaterComponent } from './theater/create-movietheater/create-movietheater.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditTheaterComponent } from './theater/edit-theater/edit-theater.component';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component'

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    LifeCycleEventComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexActorComponent,
    CreateActorComponent,
    IndexMoviesComponent,
    CreateMoviesComponent,
    IndexMovietheaterComponent,
    CreateMovietheaterComponent,
    EditGenresComponent,
    EditActorComponent,
    EditTheaterComponent,
    FormGenreComponent,
    MovieFilterComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
