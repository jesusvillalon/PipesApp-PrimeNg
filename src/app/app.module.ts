import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Configuración del locale de la app

import localeEsCL from "@angular/common/locales/es-CL";
import localeFrCa from "@angular/common/locales/fr-CA";
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsCL);
registerLocaleData(localeFrCa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: "es-CL",
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
