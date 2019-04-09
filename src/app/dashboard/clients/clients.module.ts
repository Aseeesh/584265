import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';
import { ClientService } from './clients.service';
import { ClientsComponent } from './clients.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientAddComponent } from './client-add/client-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ClientAddComponent,ClientsComponent],
  imports: [
    CommonModule, 
    FormsModule,
     ReactiveFormsModule, 
    NgbModule.forRoot(),
    ClientsRoutingModule,LayoutsModule
  ], 
  entryComponents: [
    ClientsComponent
  ],
  providers: [ ClientService
 ]
})
export class ClientsModule { }
