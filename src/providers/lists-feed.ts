import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListsFeed {

  constructor(public http: Http) {}

  getLists(channelId, ids, indicator){
    if(indicator == 'all'){
      return this.http.get('https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&maxResults=50&format=5&channelId='+channelId+'&key=AIzaSyAAfN1gpJxkBmp5sF4Ey6xmQOo2M-bLV1U')
        .map((response: Response) => response.json());
    }
    else{
      return this.http.get('https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&maxResults=50&format=5&id='+ids+'&key=AIzaSyAAfN1gpJxkBmp5sF4Ey6xmQOo2M-bLV1U')
        .map((response: Response) => response.json());
    }
  }

}
