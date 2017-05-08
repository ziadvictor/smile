import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class HomeFeed {
  showData: any;
  homeData: any
  constructor(private af: AngularFire) {}

  populateHomepage(){
      return this.af.database.list('')
  }

}
