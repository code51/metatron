import {Component, OnInit} from '@angular/core';
import {Meta} from "../meta/meta";
import {MetatronService} from "../services/metatron.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  metas: Meta[] = [];

  constructor(protected metatron: MetatronService) {}

  async ngOnInit(): void {
    this.metas = await this.metatron.getMetas();

    console.log(this.metas);
  }
}
