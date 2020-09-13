const arr = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
};

console.log(arr(5));

const divisionCheck = (a, b, c) => a % b === 0 && a % c === 0;

console.log(divisionCheck(-12, 2, -6)); // true
console.log(divisionCheck(-12, 2, -5)); // false

console.log(divisionCheck(45, 1, 6)); // false
console.log(divisionCheck(45, 5, 15)); // true

console.log(divisionCheck(4, 1, 4)); // true
console.log(divisionCheck(15, -5, 3)); // true

const capitalize = word => word[0].toUpperCase() + word.slice(1);

console.log(capitalize('work')); // Work
