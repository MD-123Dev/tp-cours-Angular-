import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TpComponent } from './tp/tp.component';
import { TpaComponent } from './tp2/tpa.component';
import { from } from 'rxjs';
import { TpbComponent } from './tp3/tpb.component';
import { DecreasePipe } from './decrease.pipe';
import { PhonePipe } from './phone.pipe';
import { TpcComponent } from './tp4/tpc.component';
import { Tp5Component } from './tp5/tp5.component';
import { Tp6Component } from './tp6/tp6.component';
import { SignupFormReactiveformComponent } from './signup-form-reactiveform/signup-form-reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    TpComponent,
    TpaComponent,
    TpbComponent,
    DecreasePipe,
    PhonePipe,
    TpcComponent,
    Tp5Component,
    Tp6Component,
    SignupFormReactiveformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
