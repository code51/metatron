import { Injectable } from '@angular/core';
import {Meta} from "../meta/meta";
import {Variable} from "../variable/variable";

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  meta() {
    let meta = new Meta();

    meta.data.push(this.boolean());
    meta.data.push(this.shortString());
    meta.data.push(this.number());
    meta.data.push(this.text());

    return meta;
  }

  boolean() {
    return Object.assign(new Variable(), {
      type: 'boolean',
      name: 'LampIsOn',
      value: true
    });
  }

  shortString() {
    return Object.assign(new Variable(), {
      type: 'short_string',
      name: 'Status',
      value: 'is_alive'
    });
  }

  number() {
    return Object.assign(new Variable(), {
      type: 'number',
      name: 'Index',
      value: 'is_alive'
    });
  }

  text() {
    return Object.assign(new Variable(), {
      type: 'text',
      name: 'Alkisah',
      value: 'al kisahnya ia adalah kisah dahulu'
    });
  }

  mock() {
    console.log(this.meta());
    return [this.meta()];
  }
}
