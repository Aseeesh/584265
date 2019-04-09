import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterwrapperComponent } from './masterwrapper/masterwrapper.component';
import { MasterfooterComponent } from './masterfooter/masterfooter.component';
import { MasterheaderComponent } from './masterheader/masterheader.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ MasterwrapperComponent, MasterfooterComponent, MasterheaderComponent],
  imports: [CommonModule, RouterModule, TranslateModule],

})
export class MasterlayoutModule { }
