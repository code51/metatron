import { Injectable } from '@angular/core';
import {Definable} from "../contracts/definable";
import {BooleanType} from "../types/boolean-type";
import {NumberType} from "../types/number-type";
import {ShortStringType} from "../types/short-string-type";
import {TextType} from "../types/text-type";

@Injectable({
  providedIn: 'root'
})
export class TypeRegistryService {

  protected types: Record<string, Definable> = {
    boolean: new BooleanType(),
    number: new NumberType(),
    shortString: new ShortStringType(),
    text: new TextType()
  };

  constructor() { }


}
