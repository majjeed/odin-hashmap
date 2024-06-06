import { Hashmap, hash } from "./hashmap.js";

let Data = new Hashmap();

Data.set("Carla", "test");
Data.set("Carlos", "current Value 1");

Data.set("Carlos", "current Value 54");

console.log(Data.bucketArray[0].toString());
