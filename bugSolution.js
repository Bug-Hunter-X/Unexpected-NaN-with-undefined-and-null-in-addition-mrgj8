function foo(a, b) {
  // Handle undefined or null values for a and b
  const numA = a === undefined ? 0 : a; //convert undefined to 0
  const numB = b === undefined ? 0 : b; //convert undefined to 0
  
  return numA + numB;
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(1, null)); // 1
console.log(foo(1, undefined)); // 1