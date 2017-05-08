import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListsPage } from '../pages/lists/lists';
import { PlaylistPage } from '../pages/playlist/playlist';
import { BasheerSinglePage } from '../pages/basheer-single/basheer-single';
import { HomeFeed } from '../providers/home-feed';
import { ListsFeed } from '../providers/lists-feed';
import { PlaylistFeed } from '../providers/playlist-feed';
import { HomeFilterPipe } from './pipes/home-filter'

export const firebaseConfig = {
    apiKey: "AIzaSyB6nUb4U68H6tKBRXq2DwaMeu8GpQf9ado",
    authDomain: "my-app-a49e5.firebaseapp.com",
    databaseURL: "https://my-app-a49e5.firebaseio.com",
    storageBucket: "my-app-a49e5.appspot.com",
    messagingSenderId: "641440725188"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListsPage,
    PlaylistPage,
    BasheerSinglePage,
    HomeFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      pageTransition: 'md-transition'
     }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListsPage,
    PlaylistPage,
    BasheerSinglePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
                        HomeFeed,
                        ListsFeed,
                        PlaylistFeed,
                        ]
})
export class AppModule {}
