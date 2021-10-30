function Alien(name, tech){
    this.name = name;
    this.tech = tech;

    this.work = () =>{
        console.log("Working for 12 hrs for a single Bug!!");
    }
}

let alien1 = new Alien('Rahul','JS');
let alien2 = new Alien('Kiron','AWS');

// console.log(alien2);

alien1.tech = "Blockchain";
console.log(alien1);
alien1.work();