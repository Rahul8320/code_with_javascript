
let num1 = 14;
let num2 = 11;
let num3 = 18;

if(num1>num2) {
    console.log("num1 is greater.");
}
else{
    console.log("num2 is greater");
}

console.log("Bye...");

if(num1 > num2 && num1 > num3) {
    console.log("num1 is greatest.");
}
else if(num2 > num3) {
    console.log("num2 is greatest.");
}
else {
    console.log("num3 is greatest.");
}

console.log("Bye...");

if(num1 % 2 === 0){
    console.log("num1 is even.")
}
else {
    console.log("num1 is odd.")
}

let result = num2 % 2 ===0 ? "Even" : "Odd"; 
console.log("result : " + result);

let day = 'friday';

switch(day) {
    case 'monday':
        console.log('7am.');
        break;
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
        console.log('4am');
        break;
    case 'friday':
        console.log('9am');
        break;
    case 'saturday':
    case 'sunday':
        console.log('8am');
        break;
    default :
        console.log('6am :  Go to Gym.');
}

console.log('Week up !! and get ready to your class..');