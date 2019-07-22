import { Injectable } from '@angular/core';
import {MetatronService} from './metatron.service';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  constructor(protected metatron: MetatronService) { }

  initialize() {
    return new Promise((resolve, reject) => {
      this.metatron.initialize().then(() => {
        resolve();
      });
    });
  }
}
