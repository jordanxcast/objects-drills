'use strict';
//Drill #1 - Object initializers and methods 
const loaf =  {
  flour: 300,
  water: 210,
  hydration: function(){
    return this.water / this.flour * 100;
  }
};

console.log(loaf.flour);
console.log(loaf.flour);

console.log(loaf.hydration());


//Drill #2 - Iterating over an object's properties 
const myObject = {
  foo: 'fi',
  bar: 'bum',
  fum: 'fro', 
  quux: 'qix',
  spam: 'spasm'
};

function loopObj(obj){
  for (let key in obj){
    console.log(`${key}: ${obj[key]}`);
    
  }
}


//Drill #3 - Arrays in objects 
const newObj = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}; 

console.log(newObj.meals[3]);


//Drill #4 & #5 - Arrays of objects &  Properties that aren't there
function Person(name, jobTitle, boss){
  return {name, jobTitle, boss};
  
}

const fred = new Person('Fred', 'Architect', '');
const phil = new Person('Phil', 'Unemployed', 'Fred');
const jordan = new Person('Jordan', 'Student', 'Fred');

const pplArr = [
  fred,
  phil,
  jordan
];

function loopArr(arr){
  arr.forEach(Person => {
    console.log(`${Person.jobTitle} ${Person.name} reports to ${!Person.boss ? 'nobody' : Person.boss}.`);
  });
}

loopArr(pplArr);


//Drill #6 - Cracking the code 
function decode(str) {
  //object representing the cipher
  const codeObj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
  };
  //create a vairable that is the first letter 
  let decodedIndex = codeObj[str.charAt(0)];
  return str.charAt(decodedIndex);
}

function decodeWords(str){
  let newArr = [];
  //console.log(newArr);
  str.split(' ').forEach(word => {
    newArr.push(decode(word));
  });
  //console.log(decode(word));
  let newStr = newArr.join('');
  return newStr;
}

let decodedStr = decodeWords('craft block argon meter bells brown croon droop');
console.log(decodedStr);

//Drill #7 - Factory Functions with LOTR
function createCharacter(name, nickname, race, origin, attack, defense, weapon){
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    weapon: weapon,
    describe: function(){
      console.log(`${name} is a ${race} of ${origin} who uses ${weapon}.`);
    },
    evaluateFight: function(character){
      return `Your opponent takes ${character.defense > attack ? 0 : attack - character.defense} damage and you receive ${defense > character.attack ? 0 : character.attack - defense} damage.`;
    }

  };

}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'string and barrow blade'),
  createCharacter('Aragorn son of Arathorn', 'Man', 'Wizard', 'Dunnedain', 6, 8, 'anduril'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'bow and arrow'),
  createCharacter('Arwen Undomiel', 'wen', 'Half-Elf', 'Rivendell', 2, 1, 'hadhafang'),
];

// let arrCharacter = characters.find(function(obj){
//   return obj.nickname === 'aragorn';
// });
const arrCharacter = characters.find(obj => obj.nickname === 'aragorn');
arrCharacter.describe();

// let hobbitArr = characters.filter(function(obj){
//   return obj.race === 'Hobbit';
// });
const hobbitArr = characters.filter(obj => obj.race === 'Hobbit');

// let attackArr = characters.filter(function(obj){
//   return obj.attack > 5;
// });
const attackArr = characters.filter(obj => obj.attack > 5);

//Drill #8 - Bonus: a database search
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query){
  arr.find(function(element){
    for (const query in element){
      return element;
    }
  });
}

function findOne(arr, query){
  arr.find(element => query in element);
}