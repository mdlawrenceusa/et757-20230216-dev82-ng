import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomemadeComponent } from './homemade/homemade.component';
import { BeansComponent } from './beans/beans.component';


const routes: Routes = [
  
  {path: '',component: HomemadeComponent}, 
  {path: 'beans',component: BeansComponent}, 

  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
