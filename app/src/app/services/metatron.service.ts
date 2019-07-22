import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";
import {MockService} from "./mock.service";

@Injectable({
  providedIn: 'root'
})
export class MetatronService {
  settings;
  apis;
  metas = [];

  constructor(protected db: Storage, protected mock: MockService) { }

  async initialize() {
    this.settings = await this.db.get('settings');
    this.settings = this.settings ? this.settings : {};

    this.apis = await this.db.get('apis');
    this.apis = this.apis ? this.apis : {};

    this.metas = this.mock.mock();
  }

  async getMetas() {
    return this.mock.mock();
  }

  settingsSave() {
    return this.db.set('settings', this.settings);
  }
}
