import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundService } from './not-found.service';
import { NotFoundComponent } from './not-found.component';

@NgModule({ 
  providers: [NotFoundService],
  declarations: [NotFoundComponent], 
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
