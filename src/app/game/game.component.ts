import { Component } from '@angular/core';

import { LocaleService } from 'angular-l10n';

import { LocalStorage } from '../shared/localstorage.decorator';

import { GameService } from './game.service';
import { Word } from './word';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent {

  @LocalStorage([]) words: Word[];

  constructor(private localeService: LocaleService, private gameService: GameService) { }

  newGame() {
    const language = this.localeService.getCurrentLanguage();
    this.gameService.newGame(5, language)
      .subscribe(words => {
        this.words = words;
      }, (err: number) => {
        // TODO: proper error handling
      });
  }

}
