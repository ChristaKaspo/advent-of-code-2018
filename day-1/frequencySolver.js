const fs = require('fs');
const frequencies = fs
  .readFileSync('frequencies.txt')
  .toString()
  .split('\n');

const findCurrentFrequency = frequencies => {
  let currentFrequency = 0;

  frequencies.forEach(frequency => {
    if (frequency.indexOf(`+`) !== -1) {
      currentFrequency += parseInt(frequency);
    } else {
      currentFrequency += parseInt(frequency);
    }
  });
  return currentFrequency;
};

console.log(findCurrentFrequency(frequencies));
