let alien = {
    name: 'Rahul',
    tech: 'JS',
    laptop: {
        cpu: 'i5',
        ram: '8GB',
        brand: 'hp'
    }
}

console.log(typeof alien);

console.log(alien.name);
console.log(alien['tech'])

console.log(alien.laptop.brand);

console.log(alien.tech?.version); // ? try to find property if not exist give undefined.

for(let key in alien){
    console.log(key);
}

for(let key in alien){
    console.log(key, alien[key])
}

for(let key in alien['laptop']){
    console.log(key, alien.laptop[key])
}

delete alien.tech
console.log(alien)
