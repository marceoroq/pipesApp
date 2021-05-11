import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';

import localeEs from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRouterModule, SharedModule, SalesModule, BrowserAnimationsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
