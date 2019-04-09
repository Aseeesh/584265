import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';
import {  NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// libs
import { TransferHttpCacheModule } from '@nguniversal/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Directive } from '@angular/core';
// shared
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseModule } from './core/firebase.module';
// components
import { AppComponent } from './app.component';
import { NotFoundModule } from './not-found/not-found.module';
import { RegisterComponent } from './login-register/register/register.component';
import { LoginComponent } from './login-register/login/login.component';
import { TranslateStore, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule   ,
    BrowserModule,
    TransferHttpCacheModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    TranslateModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FirebaseModule,
    NotFoundModule,
    AppRoutingModule,

  ],
  providers: [AuthGuard,AuthService,TranslateStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
