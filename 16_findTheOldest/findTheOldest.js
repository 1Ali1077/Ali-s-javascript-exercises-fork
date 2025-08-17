const people = [
    { name: 'Ali', year: 2004, passed: 2200 },
    { name: 'muntaddher', year: 2000, passed: 2100 },
    { name: 'Jomama', year: 2104, passed: 3200 },
    { name: 'milkarado', year: 2200, passed: 3100 }
];

const getAge = function (year, passed) {
  if (!passed) {
    passed = new Date().getFullYear();
  }
  return passed - year;
};

const findTheOldest = function (people) {
  return people.reduce();
    return oldestAge < currentAge ? currentPerson : oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
