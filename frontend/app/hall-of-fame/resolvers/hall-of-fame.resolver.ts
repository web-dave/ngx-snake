import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HallOfFameService } from '../services/hall-of-fame.service';

@Injectable({
  providedIn: 'root'
})
export class HallOfFameResolver implements Resolve<boolean> {
  constructor(private hallOfFameService: HallOfFameService) {}

  resolve(): boolean {
    if (!this.hallOfFameService.isLoaded) {
      this.hallOfFameService.getScores();
    }
    return true;
  }
}
