import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormsComponent } from './forms/forms.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';
import { MovieComponent } from './movie/movie.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  {
    path:'react',component:ReactiveformComponent
   },
   {
    path:'reacts',component:FormsComponent
  },
  {
    path:'reactx/:',component:DisplayComponent
  },
  {
    path:'reactxs/:id/:moviename',component:MovieComponent
  },
  {
    path:'**',
    component:FournotfourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
