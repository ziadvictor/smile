import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class HomeFeed {
  showData: any;
  homeData: any
  constructor(private af: AngularFireDatabase) {}

  populateHomepage(){
    console.log(this.af.list('/'));
      return this.af.list('/')
  }

}
