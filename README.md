=======
key-swap
========

traverses and object and swaps a key for another


```
var obj = { "@id": "asdf", "x": "y" };
console.log("swapped", recurseKeySwap(obj, "@id", "id"));
console.log("original", obj);
```
