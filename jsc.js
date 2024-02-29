/*const people = ["Greg", "Mary", "Devon", "James"];
people.shift();

const jamesIndex = people.indexOf("James");
if (jamesIndex !== -1) {
    people[jamesIndex] = "Jason";
}

people.push("James");
console.log(people.indexOf("Mary"));

const copy= people.slice(1, 3);
console.log(people.indexOf("Foo")); 
const last = people[people.length - 1];

for (let i = 0; i < people.length; i++)
 {
    console.log(people[i]);

    if (people[i] === "Devon") 
    {
        break; 
    }
}
*/

/*
const colors = ['blue', 'red', 'green', 'pruple', 'yellow'];

for (let i = 0; i < colors.length; i++)
 {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}*/

/*
let user = prompt("Enter a number:");
let number = Number(user);

while (number < 10) {
    user = prompt("Please enter a number:");
    number = Number(user); 
}*/

/*
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

const tenantName = building.nameOfTenants[1]; 
const tenantRoom = building.numberOfRoomsAndRent[tenantName.toLowerCase()][0]; 
console.log(`The second tenant is ${tenantName} and he has ${tenantRoom} rooms.`);

const sarahsRent = building.numberOfRoomsAndRent.sarah[1];
const davidsRent = building.numberOfRoomsAndRent.david[1];
const dansRent = building.numberOfRoomsAndRent.dan[1];

if (sarahsRent + davidsRent > dansRent) 
{
    building.numberOfRoomsAndRent.dan[1] = 1200; 
}*/

/*
const family = 
{
    father: "Leon",
    mother: "Yelena",
    son: "Allen",
    daughter: "Maya"
};

for (const key in family)
 {
    console.log(key);
}
for (const key in family) {
    console.log(family[key]);
}*/

/*
const details = 
{
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };
  
  let output = '';
  
  for (const key in details) 
  {
    output += key + ' ' + details[key] + ' ';
  }
  
  console.log(output.trim());*/

/*
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const first = names.map(name => name[0]);
const sortFirst= first.sort();
const secretName = sortFirst.join('');

console.log(secretName);*/