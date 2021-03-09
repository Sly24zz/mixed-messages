const superHeroNames = ['Tincan', 'El Nacho', 'Dark Flea', 'The Blue Nami', 'Astrobuzz', 'Tornado Twist', 'Lucky Cat']; 

const superpowers = [
    'sonic speed', 
    'invisibility', 
    'x-ray vision', 
    'time control', 
    'super strength', 
    'teleportation', 
    'telepathy', 
    'shapeshifter', 
    'pryokinesis', 
    'reality warping', 
    'magnetism', 
    'power mimicry'
];

const superHeroGen = () => {
    function getRandNum(array) {
        return Math.floor(Math.random() * array.length); 
    } 
    let hero = superHeroNames[getRandNum(superHeroNames)];
    let power = superpowers[getRandNum(superpowers)]; 
    let string = `your super hero name is ${hero} and your ability is ${power}`; 
    return string 
}; 
superHeroGen(); 
console.log(superHeroGen());