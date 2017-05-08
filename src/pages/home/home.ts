import { Component} from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';
import { PlaylistPage } from '../playlist/playlist';
import { ListsPage } from '../lists/lists';
import { HomeFeed } from '../../providers/home-feed';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homeFeeds: any;
  singleShow: any;
  singleShowData: any;
  isLoading = true;
  filter: string = '';
  constructor(
    public navCtrl: NavController,
    private homeFeedService: HomeFeed,
    public menuCtrl: MenuController,
    public events: Events){
      events.subscribe('filterTriggered', (triggeredfilter) => {
        this.filter = triggeredfilter;
        this.menuCtrl.close();
      });
    }

    ionViewDidLoad() {
      this.homeFeedService.populateHomepage()
        .subscribe(
          data => {
            this.homeFeeds = data;
          }
        )
      this.isLoading = false;
    }

    getSingleShowData(showId){
      this.singleShowData = this.homeFeeds[showId];
      return {'showName': this.singleShowData.showName,
              'featureImage': this.singleShowData.featureImage,
              'channelId': this.singleShowData.channelId,
              'playlistIds': this.singleShowData.playlistId,
              'indicator': this.singleShowData.indicator
             };
    }

    loadPlaylist(showId){
      this.singleShow = this.getSingleShowData(showId);
      this.navCtrl.push(ListsPage, this.singleShow);
    }

}
