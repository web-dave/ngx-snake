import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScoreEntry } from '../../core/models/score-entry';
import { ScoreMocks } from '../mocks/score-mocks';

@Injectable({
  providedIn: 'root'
})
export class HallOfFameService {

  private gameScores: BehaviorSubject<ScoreEntry[]> = new BehaviorSubject<ScoreEntry[]>([]);

  gameScores$: Observable<ScoreEntry[]> = this.gameScores.asObservable();

  isLoaded = false;

  constructor() { }

  getScores() {
    this.gameScores.next(ScoreMocks);
    this.isLoaded = true;
  }
}
