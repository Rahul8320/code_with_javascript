function greet(){
    console.log("Hello World!");
}

function greet_user(user){
    console.log(`Hello ${user}!!`);
}

function add(num1,num2){
    return (num1+num2);
}

greet();
greet_user("Rahul");
console.log(add(5,7));

// function expression
let add1 = function(num1,num2)
            {
                let c = num1 + num2;
                // console.log(c);
                return c;
            }

let sum = add1
console.log(add1(10,8));
console.log(sum(10,12));
console.log(sum);

// Arrow Function
let greet1 = () => {
            console.log("Hello User!!");
            return "Done!";
}

console.log(greet1())

let add2 = (num1,num2) => num1+num2;
console.log(add2(5,6));

console.log("JS is Fun!!\nChanged My Mine!!");


// Methods 
let person = {
    name: "Rahul",
    phone: "9564015168",
    email: "rahul@gmail.com",
    id: "instagram/Rahul_dey",

    details: function(){
        console.log("Name : "+this.name);
        console.log("Phone : "+this.phone);
        console.log("eMail : "+this.email);
        console.log("ID : "+this.id);
    },

    greet: function(){
        console.log("Hello "+ this.name);
        this.details();
    }
}

person.greet();
// person.details();