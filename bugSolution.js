function foo(a, b) {
  //Explicitly check if a is defined and convert it to a number before adding b
  a = typeof a === 'undefined' ? 0 : Number(a);
  //Explicitly check if b is defined and convert it to a number before adding a
  b = typeof b === 'undefined' ? 0 : Number(b);
  return a + b;
}

console.log(foo(undefined, 2)); // 2
console.log(foo(null, 2)); // 2
console.log(foo(0, 2)); // 2
console.log(foo('', 2)); // 2
console.log(foo(NaN, 2)); // NaN 