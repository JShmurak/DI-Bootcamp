/*function infoAboutMe() {

    const name = "John";
    const age = 25;
    const hobbies = ["reading", "coding", "hiking"];

    console.log(`My name is ${name}. I am ${age} years old, and my hobbies include ${hobbies.join(', ')}.`);
}
infoAboutMe();

function infoAboutPerson(personName, personAge, personFavoriteColor) 
{
    console.log(`Your name is ${personName}, you are ${personAge} years old, and your favorite color is ${personFavoriteColor}.`);
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");*/
/*
function calculateTip() 
{
    let billAmount = prompt("Enter the amount of the bill:");
    billAmount = parseFloat(billAmount);

    if (isNaN(billAmount) || billAmount <= 0) 
    {
        console.log("Invalid input. Enter a valid positive number for the bill amount.");
        return; 
    }

    let tipPercentage;
    if (billAmount < 50)
     {
        tipPercentage = 0.2; 
    } 
    else if (billAmount >= 50 && billAmount <= 200) 
    {
        tipPercentage = 0.15; 
    }
     else 
     {
        tipPercentage = 0.1;
    }

    const tipAmount = billAmount * tipPercentage;
    const finalBill = billAmount + tipAmount;

    console.log(`Tip amount: $${tipAmount.toFixed(2)}`);
    console.log(`Final bill: $${finalBill.toFixed(2)}`);
}
calculateTip();*/
/*
function isDivisible() 
{
    let sum = 0;
    for (let i = 0; i <= 500; i++)
     {
        if (i % 23 === 0) 
        {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum of numbers divisible by 23: " + sum);
}
isDivisible();*/

/*
const stock = 
{ 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}  
const prices = 
{    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
} 
const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalCost = 0;
    for (const item of shoppingList) 
    {
        if (item in stock && stock[item] > 0)
         {
            const price = prices[item];
            
            totalCost += price;

            stock[item]--;
        } 
        else
         {
            console.log(`Sorry, ${item} is out of stock.`);
        }
    }
    return totalCost;
}
const totalPrice = myBill();
console.log(`Total price of the shopping list: $${totalPrice.toFixed(2)}`);*/
/*
function changeEnough(itemPrice, amountOfChange)
 {
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    const totalChangeValue =
        amountOfChange[0] * quarterValue +
        amountOfChange[1] * dimeValue +
        amountOfChange[2] * nickelValue +
        amountOfChange[3] * pennyValue;

    return totalChangeValue >= itemPrice;
}
const canAffordItem = changeEnough(4.25, [25, 20, 5, 0]);

console.log(canAffordItem);*/

function hotelCost() {
    let numberOfNights;
    while (true) {
        let userInput = prompt("Enter the number of nights you would like to stay in the hotel:");

        if (userInput === null || isNaN(userInput))
         {
            alert("Please enter a valid number for the number of nights.");
        }
         else 
         {
            numberOfNights = parseInt(userInput, 10);
            if (numberOfNights > 0 && Number.isInteger(numberOfNights))
             {
                break; 
            } 
            else
             {
                alert("Please enter a valid positive integer for the number of nights.");
            }
        }
    }
    const costPerNight = 140;
    const totalCost = numberOfNights * costPerNight;

    return totalCost;
}
function planeRideCost() {
    let destination;

    while (true) {
        destination = prompt("Enter your destination:");

        if (destination === null || typeof destination !== "string" || destination.trim() === "") 
        {
            alert("Please enter a valid string for the destination.");
        } 
        else 
        {
            break; 
        }
    }
    if (destination.trim().toLowerCase() === "london") 
    {
        return 183;
    } 
    else if (destination.trim().toLowerCase() === "paris")
     {
        return 220;
    } 
    else
     {
        return 300;
    }
}
function rentalCarCost() {
    let numberOfDays;

    while (true)
     {
        let userInput = prompt("Enter the number of days you would like to rent the car:");

        
        if (userInput === null || isNaN(userInput)) 
        {
            alert("Please enter a valid number for the number of days.");
        } 
        else 
        {
            numberOfDays = parseInt(userInput, 10);
            if (numberOfDays > 0 && Number.isInteger(numberOfDays)) 
            {
                break; 
            } 
            else 
            {
                alert("Please enter a valid positive integer for the number of days.");
            }
        }
    }
    const costPerDay = 40;
    let totalCost = numberOfDays * costPerDay;

    if (numberOfDays > 10) 
    {
        totalCost *= 0.95;
    }
    return totalCost;
}
function totalVacationCost()
 {
    const hotelCostValue = hotelCost();
    const planeRideCostValue = planeRideCost();
    const rentalCarCostValue = rentalCarCost();

    const totalCost = hotelCostValue + planeRideCostValue + rentalCarCostValue;

    console.log(`The hotel cost: $${hotelCostValue}, the plane tickets cost: $${planeRideCostValue}, the car cost: $${rentalCarCostValue}.`);
   
    console.log(`Total vacation cost: $${totalCost}`);
    return totalCost;
}



