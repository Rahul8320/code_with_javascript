let num = 6;
console.log(num, typeof(num));

// Type Conversion
let n = String(6)
console.log(n, typeof(n));

let y = "123";
console.log(y, typeof(y));

let x;
console.log(x, typeof(x))

x = 8;
console.log(x, typeof(x));

//  Type Coercion
x = x + "";
console.log(x, typeof(x));

x = x + 2;
console.log(x, typeof(x));

x = +x + 2;
console.log(x, typeof(x));

x = x - 2;
console.log(x, typeof(x));

x = !x;
console.log(x, typeof(x));

let s = "123 Rahul";
console.log(s);

console.log(Number(s));
console.log(parseInt(s));  // convert first numbers from string to int