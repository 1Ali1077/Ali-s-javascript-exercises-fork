const palindromes = function (string) {

    const cleanString = string
    const reverseString = cleanString.split("").reverse().join("");
    return reverseString === cleanString;
};
console.log(palindromes("racecar")); 

// Do not edit below this line
module.exports = palindromes;
