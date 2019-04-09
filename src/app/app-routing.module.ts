 import { LoginComponent } from './login-register/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { WrapperComponent } from './shared/layouts/wrapper/wrapper.component';
import { RegisterComponent } from './login-register/register/register.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
    {path:'login',component:LoginComponent},
   { path: 'project', loadChildren: './dashboard/projects/projects.module#ProjectsModule' },
  {path: 'client', loadChildren: './dashboard/clients/clients.module#ClientsModule'},
  { path: 'web', loadChildren: './display/display.module#DisplayModule' },

//  { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' },
  // {
  //   path: '',
  //   component: WrapperComponent,
  //   canActivateChild: [MetaGuard],
  //   children: [

  //     { path: 'project', loadChildren: './dashboard/projects/projects.module#ProjectsModule' },
  //     {path: 'client', loadChildren: './dashboard/clients/clients.module#ClientsModule'},

  //     { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' }

  //   ],
  // },

  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
