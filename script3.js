//question 1
let radius = prompt("Enter circle radius:");
radius = Number(radius); 

let area = Math.PI * Math.pow(radius, 2);
alert("Circle Area = " + area);

let number = prompt("Enter a number to get its square root:");
number = Number(number);

let sqrtResult = Math.sqrt(number);
alert("The square root of " + number + " is: " + sqrtResult);

let angle = prompt("Enter an angle (in degrees) to get its cos value:");
angle = Number(angle);

let rad = angle * (Math.PI / 180);

let cosValue = Math.cos(rad);
alert("The cos of " + angle + " is: " + cosValue);
//question2
function printOdd(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

let start = parseInt(prompt("Enter the start number:"));
let end = parseInt(prompt("Enter the end number:"));
printOdd(start, end);
//question3
let tips = [
  "JavaScript is a high-level, dynamically typed language that runs in browsers and on servers via Node.js.",
  "Always use `const` by default and switch to `let` only when you need to reassign—avoid `var` to prevent scope bugs.",
  "JavaScript uses prototypal inheritance, meaning objects can inherit directly from other objects without classes.",
  "Prefer strict equality `===` over `==` to avoid unexpected type coercion.",
  "Functions are first-class citizens in JS: you can store them in variables, pass them as arguments, and return them.",
  "Learn and use array methods like `map`, `filter`, `reduce`, and `find` for cleaner, more functional code.",
  "Async code is everywhere—get comfortable with `async/await` and remember to handle errors with `try/catch`.",
  "The event loop enables non-blocking behavior; long CPU-heavy tasks can freeze the UI, so offload when needed.",
  "Use optional chaining `obj?.prop` and nullish coalescing `??` to write safer, clearer access/fallback logic.",
  "Debug faster with `console.table`, breakpoints in DevTools, and by inspecting network/DOM state directly."
];

let randomIndex = Math.floor(Math.random() * tips.length);

alert("Tip of the Day:\n" + tips[randomIndex]);
//question4
function executeExpression(exp) {
    try {
        let result = eval(exp); 
        alert("You entered: " + exp + "\nThe result is: " + result);
    } catch (err) {
        alert("Invalid expression!");
    }
}

let userExp = prompt("Enter a math expression:");
executeExpression(userExp);
//question5
let students = [
    { Name: "Ali", Degree: 95 },
    { Name: "Yara", Degree: 55 },
    { Name: "Ahmed", Degree: 72 },
    { Name: "Adham", Degree: 40 },
    { Name: "Jana", Degree: 88 }
];

// Find student Name, who got degree between 90 and 100 [Use find()].
let topStudent = students.find(function(stu){
    return stu.Degree >= 90 && stu.Degree <= 100;
});
console.log(topStudent);

// Print students names, who got a degree less than 60 [Use filter()].
let weakStudents = students.filter(function(stu){
    return stu.Degree < 60;
});
console.log(weakStudents);

students.push({ Name: "AliG", Degree: 90 });

for (let i in students) {
    console.log(students[i]);
}

students.pop();

for (let stu of students) {
    console.log(stu);
}

students.sort(function(a, b){
    if (a.Name > b.Name) return 1;
    if (a.Name < b.Name) return -1;
    return 0;
});
console.log(students);

// Use splice() function to add 2 new students after the second element of the array [Bonus].
students.splice(2, 0,
    { Name: "Mona", Degree: 66 },
    { Name: "Khaled", Degree: 81 }
);
console.log(students);

// Use splice() function to remove 1 student after the third element in the array [Bonus].
students.splice(3, 1);
console.log(students);
//question6
function reverseArgs1(...args) {
  return args.reverse();
}

console.log(reverseArgs1(1, 2, 3, 4)); 
//-------------------------------//
function onlyTwoParams(a, b) {
  if (arguments.length !== 2) {
    throw new Error("Function must take exactly 2 parameters.");
  }
  return [a, b];
}
console.log(onlyTwoParams(5, 10)); 
//--------------------------------//
function addNumbersOnly(...nums) {
  if (nums.length === 0) {
    throw new Error("You must pass at least one number.");
  }

  if (!nums.every(n => typeof n === "number")) {
    throw new TypeError("All parameters must be numbers.");
  }

  return nums.reduce((sum, n) => sum + n, 0);
}

console.log(addNumbersOnly(1, 2, 3)); 
