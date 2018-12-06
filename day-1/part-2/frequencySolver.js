const fs = require('fs');
const frequencies = fs
  .readFileSync('frequencies.txt')
  .toString()
  .split('\n');

const findCurrentFrequency = frequencies => {
  let currentFrequency = 0;
  let pastFrequencies = [];

  for (let i = 0; i <= frequencies.length; ++i) {
    if (i === frequencies.length) {
      i = 0;
    }
    let frequency = frequencies[i];
    currentFrequency += parseInt(frequency);
    console.log(currentFrequency);
    let foundDuplicate = pastFrequencies.includes(currentFrequency);
    if (foundDuplicate === true) {
      console.log(pastFrequencies.length);
      return currentFrequency;
    }
    pastFrequencies.push(currentFrequency);
  }
};

console.log(findCurrentFrequency(frequencies));
// for (let i = 0; i < frequencies.length; ++i) {
//   let difference = parseInt(frequencies[i]) + parseInt(frequencies[i + 1]);
//   for (let j = 0; j < currentArray.length; ++j) {
//     if (currentArray[j] === difference) {
//       return difference;
//     }
//   }
//   currentArray.push(difference);
// }
