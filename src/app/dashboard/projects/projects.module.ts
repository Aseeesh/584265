import { ProjectService } from './projects.service';
import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';

@NgModule({
  declarations: [AddProjectComponent,ProjectsComponent],
  imports: [
    CommonModule, 
    FormsModule,
     ReactiveFormsModule,
    ProjectsRoutingModule,LayoutsModule
  ],
   entryComponents: [
    ProjectsComponent
  ],
  providers: [ 
   ProjectService
 ]
})
export class ProjectsModule { }
