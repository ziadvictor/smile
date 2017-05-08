import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListsFeed } from '../../providers/lists-feed';
import { PlaylistPage } from '../playlist/playlist';


@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage {
  listsFeed: any[] = [];
  listInfo: Object;
  playlistIds : string[] = [];
  channelId : string;
  showName: string = '';
  featureImage: string = '';
  indicator: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private listsService: ListsFeed){};

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ListsPage');
  // }

  ionViewDidLoad(){
    this.playlistIds = this.navParams.get('playlistIds');
    this.featureImage = this.navParams.get('featureImage');
    this.showName = this.navParams.get('showName');
    this.indicator = this.navParams.get('indicator');
    this.channelId = this.navParams.get('channelId');
    this.listsService.getLists(this.channelId, this.playlistIds, this.indicator)
      .subscribe(
        data => {
          this.listsFeed = data.items;
        }
      );
  }

  navigateToPlaylist(id, listName){
    this.navCtrl.push(PlaylistPage, {'playlistId': id, 'featureImage': this.featureImage, 'listName': listName });
  }

}
