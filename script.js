// Task 1
function writeHeaders() {
     for (let i = 1; i <= 6; i++) {
          document.write(`<h${i}>welcome to my page ${i}</h${i}>`);
     }
}
// Task 2
function checkTemp(temp) {
     let result = (temp >= 30) ? "HOT" : "Cold";
     document.write(result);
}
// Task 3
function task3() {
     let sum = 0;

     while (true) {
          let input = Number(prompt("Enter a number (0 to stop):"));
        
          if (input === 0) break;
          sum += input;
          if (sum > 100) break;
     }

     console.log("Total sum = " + sum);
     document.write(`<p>Total sum = ${sum}</p>`);}

// Task 4
function task4() {
    alert("Welcome to my site!");

    let name = prompt("Enter your name:");

    document.write("Welcome " + name);
}

//task5
function task5() {
    let x = Number(prompt("Enter x:"));
    let y = Number(prompt("Enter y:"));
    let z = Number(prompt("Enter z:"));

    if (x % y === 0 && x % z === 0) {
        document.write(x + " is divisible by both " + y + " and " + z);
    }
    else if (x % y === 0) {
        document.write(x + " is divisible by " + y + " only");
    }
    else if (x % z === 0) {
        document.write(x + " is divisible by " + z + " only");
    }
    else {
        document.write(x + " is not divisible by " + y + " or " + z);
    }
}

//task6
function task6() {
    let name;

    do {
        name = prompt("Enter your name:");
    } while (!name || !isNaN(name));

    let birthYear;

    do {
        birthYear = prompt("Enter your birth year (must be < 2010):");
    } while (isNaN(birthYear) || Number(birthYear) >= 2010);

    birthYear = Number(birthYear);

    let age = 2025 - birthYear;

    document.write("Name: " + name + "<br>");
    document.write("Birth year: " + birthYear + "<br>");
    document.write("Age: " + age);
}