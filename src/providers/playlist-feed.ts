import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PlaylistFeed {

  constructor(public http: Http) {}

  getSinglePlaylistData(playlistId, nextPageToken){
    if(nextPageToken == ''){
      return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId='+playlistId+'&key=AIzaSyAAfN1gpJxkBmp5sF4Ey6xmQOo2M-bLV1U')
        .map((response: Response) => response.json());
    }
    else{
      return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&pageToken='+nextPageToken+'&playlistId='+playlistId+'&key=AIzaSyAAfN1gpJxkBmp5sF4Ey6xmQOo2M-bLV1U')
        .map((response: Response) => response.json());
    }
  }

  // loadNextPage(playlistId, nextPageToken){
  //   return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&pageToken='+nextPageToken+'&playlistId='+playlistId+'&key=AIzaSyAAfN1gpJxkBmp5sF4Ey6xmQOo2M-bLV1U')
  //     .map((response: Response) => response.json());
  // }

}
