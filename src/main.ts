/// <reference types="@angular/localize" />

import { enableProdMode, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';


import { environment } from './environments/environment';
import { platformBrowser, BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, NgbModule)]
})
  .catch(err => console.error(err));
