let age = 21  // number
let users = "Rahul Dey"  // string
let obj = {firstName : "Rahul",lastName : "Dey",age : 21}  // objects
console.log(obj);
console.log(obj + " -> " +typeof obj);
console.log(users +" -> "+ typeof users);

/*
    Data Type --> 1. Primitive --> i.Number  ii.String  iii.Boolean  iv.Null  v.Undefined  vi.Symbol
                  2. Objects.
*/

// Numbers --------------------------------
let num = 1254678;
console.log(num +" -> "+typeof num);

let marks = 98.56;
console.log(marks +" -> "+typeof marks);


let y = 123e5;      // 12300000
let z = 123e-5;     // 0.00123
let num2 = 10e15;
console.log(num2 +" -> "+typeof num2);

let num3 = 100_000_000;
console.log(num3 +" -> "+typeof num3);

console.log(10/0);        // Infinity
console.log(-10/0);       // -Infinity

console.log(Number.MAX_VALUE);      // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);      // 5e-324
console.log(Number.MAX_SAFE_INTEGER);    // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);    // -9007199254740991

console.log(Number.MAX_VALUE * 10);       // Infinity


// BigInt ---------------------------------------------
let bigNum = 102145789321456n;
console.log(bigNum +" --> " + typeof(bigNum));
console.log(bigNum + 2)  // --> error!! can't add bigint to number (data type mismatch.)
console.log(bigNum + 2n); 


// String ----------------------------------------------
// When adding a number and a string, JavaScript will treat the number as a string. -->
let x = 16 + " Rupees";
console.log(x);
console.log(typeof x);

let x2 = "Rupees " + 25;
console.log(x2 + " -> "+ typeof x2);


// *** JavaScript evaluates expressions from left to right. Different sequences can produce different results:
let y = 16 + 4 + " Rupees";   // left -> right operation , first operation (16+4) then + " Rupees".
console.log(y);

let y2 = "Rupees " + 16 + 4;// left -> right operations. first operation ("Rupees "+16) then + 4.
console.log(y2);


// Undefined --------------------------------------
let car;  // or let car = undefined;
console.log(car);           // undefined
console.log(typeof car);    // undefined


// Null -----------------------------------------
let lastName = null;
console.log(lastName);      // null
console.log(typeof lastName); // object