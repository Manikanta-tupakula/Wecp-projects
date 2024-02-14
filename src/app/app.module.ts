import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form, FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
 
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { DisplayComponent } from './display/display.component';
import { MovieComponent } from './movie/movie.component';
import { AppRoutingModule } from './app-routing.module';
import { FournotfourComponent } from './fournotfour/fournotfour.component';
//import { FormsComponent } from './forms/forms.component';
 
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ReactiveformComponent,
    DisplayComponent,
    MovieComponent,
    FournotfourComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
    //   {
    //   path:'react',component:ReactiveformComponent
    //  },
    //  {
    //   path:'reacts',component:FormsComponent
    // },
    // {
    //   path:'reactx/:',component:DisplayComponent
    // },
    // {
    //   path:'reactxs/:id/:moviename',component:MovieComponent
    // }
  ])
    //AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }