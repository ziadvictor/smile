import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlaylistFeed } from '../../providers/playlist-feed';
import { YoutubeVideoPlayer } from 'ionic-native';

@Component({
  selector: 'page-basheer-single',
  templateUrl: 'basheer-single.html'
})

export class BasheerSinglePage{
  vId: number;
  imageLink: string;
  title: string;
  description: string;
  videoLink: string;
  playlistId: string = '';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private playlistService: PlaylistFeed){}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad BasheerSinglePage');
  // }

  ionViewDidLoad() {
    this.playlistId = this.navParams.get('playlistId');
    this.vId = this.navParams.get('videoId');
    this.playlistService.getSinglePlaylistData(this.playlistId, '')
      .subscribe(
        data => {
          this.imageLink = data.items[this.vId].snippet.thumbnails.medium.url;
          this.title = data.items[this.vId].snippet.title;
          this.description = data.items[this.vId].snippet.description;
          this.videoLink = data.items[this.vId].snippet.resourceId.videoId;
        }
      );
  }

  playVideo(){
    YoutubeVideoPlayer.openVideo(this.videoLink);
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

}
