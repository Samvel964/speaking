import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './shared/icons/icons.module';
import { PageNotFoundModule } from './layouts/page-not-found/page-not-found.module';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './shared/components/loader/loader.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // todo find a right place for this module
    IconsModule,
    PageNotFoundModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
