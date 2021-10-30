let values = [];

console.log(values);

console.log(typeof values);

values = [5,7,8];
console.log(values);
values.push(10);
console.log(values.push(13,17,21));
console.log(values);
console.log(values[1]);

// array can take multiple data type and object as well.

let data = ['Rahul',{age:21},26,()=>{
    console.log("You are in a anonymous function!!");
    console.log("Hello "+data[0]);
}]

// call the function in the array.
data[3]();

// Array methods 
let roll = [5,9,11,17,27,37];
console.log(roll.push(43));
console.log(roll.pop());
console.log(roll.shift());
console.log(roll.unshift(3));

console.log(roll.splice(2,2, 16,18)); // remove from index 2 of 2 element and insert in that position 
console.log(roll.splice(3,2)); // remove 2 element from starting index 3 
console.log(roll);


let nums = []
nums[0] = 5;
nums[19] = 75;
console.log(nums);

for (let key in nums)
    console.log(key);

for(let i=1;i<19;i++){
    nums[i] = nums[i-1]+2;
}

for(let n of nums)
    console.log(n);