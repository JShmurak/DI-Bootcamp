const userInput = prompt("Enter several words are separated by commas:");
const wordsArray = userInput.split(',');

const max = Math.max(...wordsArray.map(word => word.length));

console.log('*'.repeat(max + 4)); 

for (const word of wordsArray) 
{
    console.log(`* ${word.padEnd(max, ' ')} *`);
}
console.log('*'.repeat(max + 4)); 