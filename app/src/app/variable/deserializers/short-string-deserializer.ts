import {Deserializer} from "../../contracts/deserializer";
import {Definable} from "../../contracts/definable";

export class ShortStringDeserializer implements Deserializer {
  deserialize(data: Object): Definable {
    return undefined;
  }
  validate(data: any) {
    return typeof data == 'string' && data.length < 20;
  }
}
