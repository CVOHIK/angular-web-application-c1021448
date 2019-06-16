import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBruMapComponent } from './my-bru-map/my-bru-map.component';

import {BruMapService} from './bru-map-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MyBruMenuComponent } from './my-bru-menu/my-bru-menu.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import 'hammerjs';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent,
    MyBruMapComponent,
    MyBruMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpcz4zxy3kX5Ao61RezEjKkjtOKs0t9-w'
    }),
    AgmDirectionModule
    
  ],
  providers: [BruMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
