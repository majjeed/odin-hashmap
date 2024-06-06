import { LinkedList } from "./linked-list.js";

class Hashmap {
  constructor() {
    this.bucketArray = [];
    this.buckets = 3;
    for (let i = 0; i < this.buckets; i++) {
      this.bucketArray[i] = new LinkedList();
    }
  }

  getHashCode(key) {
    let hashCode = hash(key) % this.buckets;
    return hashCode;
  }

  set(key, value) {
    let hashCode = this.getHashCode(key);

    //if the bucket is empty
    if (this.bucketArray[hashCode].size() === 0) {
      this.bucketArray[hashCode].append({ key, value });
    }
    //if the bucket is not empty and already contains key
    else if (this.bucketArray[hashCode].contains(key)) {
      let index = this.bucketArray[hashCode].find(key);
      console.log("the index is : " + index);
      this.bucketArray[hashCode].insertAt({ key, value }, index);
      this.bucketArray[hashCode].removeAt(index + 1);
    }
    //if bucket not empty and does not contain key
    else {
      this.bucketArray[hashCode].append({ key, value });
    }
  }

  get(key) {
    let hashCode = this.getHashCode(key);
    if (this.bucketArray[hashCode].contains(key)) {
      let index = this.bucketArray[hashCode].find(key);
      return this.bucketArray[hashCode].at(index);
    }
    return null;
  }

  has(key) {
    let hashCode = hash(key) & this.buckets;
    return this.bucketArray[hashCode].key === key;
  }

  remove(key) {}

  length() {}

  clear() {}

  keys() {}

  values() {}

  entries() {}
}

function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }

  return hashCode;
}

export { Hashmap, hash };
