//  don't declare just initialize
num = 5
console.log(num)
/* 
    I) num has global scope.
    II) it is mutable variable.
    II) not a good practice.
*/
// --------------------------------------------------------

// declare using 'let' 
let num1 = 49
console.log(num1)
/*
    I) num1 has block scope (that means it is available only in that block where it is declared)
    II) it is mutable variable.
    III) if once declared we can't redeclare again. (i.e. let num1 = 51 --> gives error!!)
    IV) let variable has temporal dead zone.(see notes.txt for details.)
    V) good practice for coding.
*/
// -------------------------------------------------------------

// declare using 'var'
var num2 = 50
console.log(num2)
/*
    1. it has global and block scope both! if it is declared inside a block then it has block scope and if it is declared outside a  
        block then it has global scope.
        inside block --> block scope !
        outside block --> global scope !!
    2. it is mutable variable.
    3. The var keyword allows you to redeclare a variable without any issue.(i.e. var num2 = 40 --> no error)
    4. var variables does not have temporal time zone.(se notes.txt)
*/
// --------------------------------------------------------------------

// declare using 'const'
const pi = 3.145
console.log(pi);
/* 
    1. Variables defined with const have Block Scope.
    2. it is immutable variable.
    3. Variables defined with const cannot be Redeclare.
    4. Variables defined with const cannot be Reassigned(i.e. pi = 5 --> gives error)
*/
