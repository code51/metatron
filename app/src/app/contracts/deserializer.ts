import {Definable} from "./definable";

export interface Deserializer {
  validate(data: Object)
  deserialize(data: Object) : Definable
}
