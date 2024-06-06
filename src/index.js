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

//Testing clear()
/*
Data.clear();
console.log(Data.bucketArray);

Data.set("Carla", "test");
Data.set("Carlos", "current Value 1");
Data.set("Leno", "pc");
console.log(Data);
*/

//console.log(Data.keys());

//console.log(Data.values());
