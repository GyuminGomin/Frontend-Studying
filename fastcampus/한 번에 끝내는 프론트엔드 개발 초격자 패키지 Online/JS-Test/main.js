console.log(typeof "hello world!");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(getType(123));
console.log(getType(undefined));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));