import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IonicStorageModule} from '@ionic/storage';
import {ModalPageModule} from './pages/modal/modal.module';
import {HttpClientModule} from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera} from '@ionic-native/camera/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    ModalPageModule,
    HttpClientModule
  ],
  providers: [
    BarcodeScanner,
    Camera,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
