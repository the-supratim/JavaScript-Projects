//Pyramid Generator using JavaScript

const character = "#";
const count = 8;
const rows = [];
let inverted = true; //Change to flip the pyramid

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }
  
for (let i = 1; i <= count; i++) {
    if (inverted) {
    rows.unshift(padRow(i, count)); //unshift method
    } else {
    rows.push(padRow(i, count)); //push method
    }
}

let result = ""

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);
