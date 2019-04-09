import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from 'src/app/shared/layouts/wrapper/wrapper.component';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  {path: '',
     component: WrapperComponent,
    //  canActivateChild: [MetaGuard],
     children: [
      {path: '', component: ProjectsComponent
      , children: [
        {path: ':id', component: AddProjectComponent},
       ]
      }
     ]

},
  
  //  {path: '', component: ProjectsComponent, children: [
  //   {path: ':id', component: AddProjectComponent},
  //  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
