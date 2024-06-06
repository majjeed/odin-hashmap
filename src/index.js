import { Hashmap, hash } from "./hashmap.js";

let Data = new Hashmap();

Data.set("Carla", "test");
Data.set("Carlos", "current Value 1");
Data.set("Leno", "pc");

Data.set("Carlos", "current Value 54");

console.log(Data.bucketArray);

//console.log(Data.get("Carla"));

//console.log(Data.has("Carlos"));

//console.log(Data.remove("Carla"));
//console.log(Data.bucketArray[0]);

//console.log(Data.length());
