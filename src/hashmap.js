import { LinkedList } from "./linked-list.js";

/* 
Use the following snippet whenever you access a 
bucket through an index. We want to throw an 
error if we try to access an out of bound index:
*/

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

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
    let hashCode = this.getHashCode(key);
    return this.bucketArray[hashCode].contains(key);
  }

  remove(key) {
    let hashCode = this.getHashCode(key);
    if (this.has(key)) {
      let index = this.bucketArray[hashCode].find(key);
      this.bucketArray[hashCode].removeAt(index);
      return true;
    }
    return false;
  }

  length() {
    let length = 0;
    this.bucketArray.forEach((bucket) => {
      length += bucket.size();
    });
    return length;
  }

  clear() {
    //lazy way redeclare bucketArray
    //okay way redeclare linked lists in bucketArray
    //better way set the head and tail of each linked list to null in bucketArray
    this.bucketArray.forEach((bucket) => {
      bucket.head = null;
      bucket.tail = null;
      bucket.length = 0;
    });
  }

  keys() {
    let keysArr = [];

    this.bucketArray.forEach((bucket) => {
      if (bucket.head !== null) {
        let currNode = bucket.head;
        while (currNode !== null) {
          keysArr.push(currNode.value.key);
          currNode = currNode.nextNode;
        }
      }
    });

    return keysArr;
  }

  values() {
    let valuesArr = [];

    this.bucketArray.forEach((bucket) => {
      if (bucket.head !== null) {
        let currNode = bucket.head;
        while (currNode !== null) {
          valuesArr.push(currNode.value.value);
          currNode = currNode.nextNode;
        }
      }
    });

    return valuesArr;
  }

  entries() {
    let arr = [];

    this.bucketArray.forEach((bucket) => {
      if (bucket.head !== null) {
        let currNode = bucket.head;
        while (currNode !== null) {
          arr.push([currNode.value.key, currNode.value.value]);
          currNode = currNode.nextNode;
        }
      }
    });

    return arr;
  }
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
