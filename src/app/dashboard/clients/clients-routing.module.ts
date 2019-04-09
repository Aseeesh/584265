import { ClientsComponent } from './clients.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientAddComponent } from './client-add/client-add.component';
import { WrapperComponent } from 'src/app/shared/layouts/wrapper/wrapper.component';

const routes: Routes = [
  {path: '',
     component: WrapperComponent,
     // canActivateChild: [MetaGuard],
     children: [
      {path: '', component: ClientsComponent, children: [
        {path: ':id', component: ClientAddComponent},
       ]}
     ]

},
//   {path: '', component: ClientsComponent},
//  {path: ':id', component: ClientAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
