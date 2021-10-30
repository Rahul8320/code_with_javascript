
let i = 5;

while (i--) {
    console.log("Hii ", i)
}

i = 10;
do {
    console.log("Hello ", i);
    i++;
}while(i<=5);


for(let j=1;j<=7;j++){
    console.log("Hey ", j);
}

for(let j=1;j<=7;j++){
    console.log("Hey ", j);

    for(let k = 3;k > 0;k--)
        console.log("Hello ", k);
}

for(let j=1;j<=100;j++){
    if(j % 3 == 0)
        console.log(j);
}

let number = 123456;
let rev = 0;
while(number > 0){
    rim = number % 10;
    rev = rev * 10 + rim;
    number = parseInt (number/10);
    console.log(rim);
}

console.log("Reverse : ",rev);