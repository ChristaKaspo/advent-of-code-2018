const fs = require('fs');
const frequencies = fs
  .readFileSync('frequencies.txt')
  .toString()
  .split('\n');

const findCurrentFrequency = frequencies => {
  let currentFrequency = 0;

  frequencies.forEach(frequency => {
    currentFrequency += parseInt(frequency);
  });
  return currentFrequency;
};

console.log(findCurrentFrequency(frequencies));
