import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { AngularFireModule } from 'angularfire2';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { environment } from '../environments/environment';
//import { AngularFireDatabase } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListsPage } from '../pages/lists/lists';
import { PlaylistPage } from '../pages/playlist/playlist';
import { BasheerSinglePage } from '../pages/basheer-single/basheer-single';
import { HomeFeed } from '../providers/home-feed';
import { ListsFeed } from '../providers/lists-feed';
import { PlaylistFeed } from '../providers/playlist-feed';
import { HomeFilterPipe } from './pipes/home-filter';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
//import * as firebase from 'firebase/app';

const config = {
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
    //AngularFireModule.initializeApp(environment.firebase, 'my-app'),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    //AngularFireDatabase.initializeApp(firebaseConfig)
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
                        StatusBar,
                        SplashScreen,
                        HomeFeed,
                        ListsFeed,
                        PlaylistFeed,
                        YoutubeVideoPlayer
                        ]
})
export class AppModule {}
