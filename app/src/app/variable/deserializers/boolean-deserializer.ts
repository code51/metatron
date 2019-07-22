import {Deserializer} from "../../contracts/deserializer";
import {Definable} from "../../contracts/definable";

export class BooleanDeserializer implements Deserializer{
  deserialize(data: Object): Definable {
    return undefined;
  }

  validate(data: any) {
    return data == 'true' || data == 'false' || typeof data == 'boolean';
  }
}
