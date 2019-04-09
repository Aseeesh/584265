import { MasterlayoutModule } from '../shared/masterlayout/masterlayout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    DisplayRoutingModule,
    FormsModule,
     ReactiveFormsModule, MasterlayoutModule
  ], entryComponents: [
    HomeComponent
  ],
})
export class DisplayModule { }
