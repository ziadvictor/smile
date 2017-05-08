import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlaylistFeed } from '../../providers/playlist-feed';
import { BasheerSinglePage } from '../basheer-single/basheer-single';

@Component({
  selector: 'page-basheer',
  templateUrl: 'playlist.html'
})
export class PlaylistPage {
  feeds: any[] = [];
  listInfo: Object;
  videoId: number;
  playlistId: string = '';
  listName: string = '';
  featureImage: string = '';
  nextPage: string = '';
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private playlistService: PlaylistFeed){};

    ionViewDidLoad(){
      this.populatePlaylist();
    }

    populatePlaylist(){
      this.playlistId = this.navParams.get('playlistId');
      this.featureImage = this.navParams.get('featureImage');
      this.listName = this.navParams.get('listName');
      this.playlistService.getSinglePlaylistData(this.playlistId, this.nextPage)
        .subscribe(
          data => {
            console.log('d1='+this.feeds);
            //if(this.feeds == ['']){
              this.feeds = data.items;
            //}
            //else{
              //this.feeds.push(data.items);
            //}
            //console.log('d2='+this.feeds);
            this.nextPage = data.nextPageToken
          }
        );
    }

    navigateToSingleVideo(index: number){
      this.videoId = index;
      this.navCtrl.push(BasheerSinglePage, {'playlistId': this.playlistId, 'videoId': this.videoId});
    }

    filterVideoTitle(title){
      if(title == 'Private video'){
        return false;
      }
      else if(title == 'Deleted video'){
        return false;
      }
      else{
        return true
      }
    }

    goHome(){
      this.navCtrl.popToRoot();
    }

    loadMore(){;
      this.populatePlaylist();
    }


  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad BasheerPage');
  // }

}
