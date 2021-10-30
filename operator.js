let num1 = 16;
let num2 = 12;

// -----------------------------------------------------------------------
// Arithmetic operator

// let result = num1 + num2;
// let result = num1 - num2;
let result = num1 % num2;
console.log(result);

let n1 = true;
let n2 = true;

let res = n1 + n2;
console.log(res);

let x = 6;
console.log(x++,++x);
console.log(--x,x--);

console.log(4**2);  
console.log(Math.pow(4,2));


// -----------------------------------------------------------------------
// Relational Operator

let data = 7 > 6;
console.log(data);
data = 6<=6;
console.log(data);

x = "Pen";
let y = "Book";
data = x > y;
console.log(data);

y = "Pencil";
data = x > y;
console.log(data);

x = "2"
y = 1
data = x > y
console.log(data);

x = "3"
y = 3
data = x == y  // compare only value not data type
console.log(data); 

data = x === y  // conmpare value + data type 
console.log(data);


// -----------------------------------------------------------------
// Logical operator

let x1 = 7, x2 = 8, x3 = 6
let ans = x1 < x2 && x1 < x3  // logical and operator
console.log(ans);

ans = x1 < x2 || x1 < x3  // logical or operator
console.log(ans);
 
console.log(!ans); // logical not operator