import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {DBHttpService} from './dbhttp.service';
import {DBService} from './db.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [
    DBHttpService,
    DBService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
