
function repeatString(word,times) {
    let str = "";
    for (let i = 0; i < times; i++) {
        str += word;
    }
    return str;
};
console.log(repeatString("hey",3))

// Do not edit below this line
module.exports = repeatString;
