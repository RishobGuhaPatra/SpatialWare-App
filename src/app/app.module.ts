import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as ngx from '@ionic-native/ble/ngx';
import { ToastController } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebaseConfig from './firebase'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { UserService } from './services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { FavoriteService } from './services/favorite.service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [  BrowserModule, 
                IonicModule.forRoot(), 
                AppRoutingModule,
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFireAuthModule,
    ],
  providers: [
    AngularFirestore,
    ngx.BLE,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
