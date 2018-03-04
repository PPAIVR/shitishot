import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { AllOriginsService } from './allorigins.service';

@Injectable()
export class BingService {

  // Since I couldn't find an API that isn't deprecated or doesn't have ridiculous limitations, we're scraping this bad boy.
  private url = (query: string, languageCode: string) => `https://www.bing.com/search?q=${encodeURIComponent(query.trim().replace(/\s\s+/g, ' ').toLowerCase()).replace(/%20/g, '+')}&setLang=${languageCode}`;

  constructor(private allOriginsService: AllOriginsService) { }

  /**
   * Get number of search results on Bing.
   * @param query Search query.
   * @param languageCode Language code, see [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
   */
  getSearchResults(query: string, languageCode: string): Observable<number> {
    return Observable.create((observer: Observer<number>) => {
      this.allOriginsService.getContents(this.url(query, languageCode)).subscribe(contents => {
        const parser = new DOMParser();
        const parsedContents = parser.parseFromString(contents, 'text/html');
        const count = parsedContents.getElementsByClassName('sb_count');
        if (count && count[0]) {
          const searchResults = /\d{1,3}(.\d{3})*/.exec(count[0].innerHTML)[0];
          const searchResultsWithoutSeparators = searchResults.replace(/[^0-9]/g, '');
          observer.next(parseInt(searchResultsWithoutSeparators));
          observer.complete();
        } else {
          observer.error(-1);
          observer.complete();
        }
      }, (err: number) => {
        observer.error(err);
        observer.complete();
      });
    });
  }

}