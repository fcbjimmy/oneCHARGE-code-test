//Question 1
//Print a staircase which takes interge N as the heigh of the staircase

//create function to add spaces to string
//save it in a variable
//create array with number of elements n
//replace the element with # according to the index
//console.log() the variable and use join method to convert [] -> string

function stairsCase(n: number): void {
  function addSpaces(num: number): string {
    let spaces = "";
    while (num > 0) {
      spaces += " ";
      num--;
    }
    return spaces;
  }

  let stairs = addSpaces(n).split("");
  for (let i: number = n - 1; i >= 0; i--) {
    stairs[i] = "#";
    console.log(stairs.join(""));
  }
}

stairsCase(6);
