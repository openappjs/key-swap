var traverse = require('traverse');

function keySwap (obj, prevKey, newKey) {
  return traverse(obj).map(function (value) {
    // if key we want to swap
    if (this.key === prevKey) {
      // remove value at previous key
      this.remove();
      // set value at new key
      this.parent.node[newKey] = value;
    }
  });
}

module.exports = keySwap;