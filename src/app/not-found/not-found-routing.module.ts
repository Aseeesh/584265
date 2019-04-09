import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
  path: '',
  component: NotFoundComponent,
  data: {
    meta: {
      title: 'not-found.title',
      description: 'not-found.text',
    },
  },
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
