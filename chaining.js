// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [23, 15, 6, 3, 11, 20, 18, 7, 21, 1, 29, 10, 12, 8];

var sortNum = integers.sort( (a, b) => { return b - a;});
console.log("sorted numbers in descending order", sortNum);

var filteredNum = integers.filter( (x) => {return x < 19});
console.log("Remove numbers greater than 19", filteredNum);

var editNum = integers.sort( (a, b) => b - a).filter( x => x < 19).map( a => (a * 1.5) - 1).reduce( (y, z) => y + z);
console.log("The sum of all the resulting numbers", editNum);

let print = document.getElementById("chaining");
print.innerHTML = `<h2> Chaining method exercise</h2>
<p> Using one single line of JavaScript code, complete the following tasks on the <strong> array of integers:</strong> ${integers.join(" , ")}. </p> <ul>
<li>Sort the numbers in descending order: ${sortNum.join(" , ")}</li><br>
<li>Remove any integers greater than 19. <br>Results: ${filteredNum.join(" , ")}</li><br>
<li>Multiply each remaining number by 1.5 and then subtract 1.
The sum of all the resulting numbers:
<h1>${editNum}</h1></li></ul>`;