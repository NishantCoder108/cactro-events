console.log("Hello world")
// Example Usage: 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Example 1: Grouping by even and odd numbers

// const groupsByEvenOdd = numbers.groupBy(x => x % 2 === 0 ? 'Even' : 'Odd');
// console.log(groupsByEvenOdd);

// cat : tac , atc

Array.prototype.groupBy = function group(keyselector) {

    if (!Array.isArray(this) || this.length === 0) {

        return {};
    };

    const finalOutput = {};

    for (let element of this) {
        const key = element == null ? "null" : keyselector(element);

        if (!finalOutput[key]) {
            finalOutput[key] = [];
        }

        finalOutput[key].push(element);
    }

    return finalOutput;
}

const groupsByEvenOdd = numbers.groupBy(x => x % 2 === 0 ? 'Even' : 'Odd');

console.log(groupsByEvenOdd);
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Group by even and odd 

// { Odd: [ 1, 3, 5, 7, 9 ], Even: [ 2, 4, 6, 8 ] }