import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'homeFilter',
    pure: false
})
export class HomeFilterPipe implements PipeTransform {
    transform(feeds: any[], filter: string): any {
        if (!feeds || !filter) {
            return feeds;
        }
        return feeds.filter(feed => feed.type.indexOf(filter) !== -1);
    }
}