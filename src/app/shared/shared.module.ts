import { MasterlayoutModule } from './masterlayout/masterlayout.module';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { TransferHttpModule } from '@gorniv/ngx-transfer-http';

import { LayoutsModule } from './layouts/layouts.module';
@NgModule({
  exports: [LayoutsModule, MasterlayoutModule,  TransferHttpModule],
  providers: [],
  declarations: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
