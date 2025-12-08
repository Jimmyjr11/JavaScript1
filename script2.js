//Qustion1
let text = prompt("Enter a string:");
let ch = prompt("Enter a character to count:");
let caseChoice = prompt("Case sensitive? (yes/no)");
if (caseChoice.toLowerCase() === "no") {
     text = text.toLowerCase();
     ch = ch.toLowerCase();
}
if (ch.length !== 1) {
     console.log("Please enter a single character to count.");
} else {
     ch = ch[0];
}
let count = 0;

for (let i = 0; i < text.length; i++) {
     if (text[i] === ch) {
          count++;
     }
}
console.log(`The character '${ch}' occurs ${count} times in the given string.`);
alert("Character '" + ch + "' appeared " + count + " times.");
//Qustion2
let txt = prompt("Enter a string:");
let caseCh = prompt("Case sensitive? (yes/no)");
if (caseCh.toLowerCase() === "no") {
     txt = txt.toLowerCase();
}
let reversedTxt = "";
for (let i = txt.length - 1; i >= 0; i--) {
     reversedTxt += txt[i];
}
if (txt === reversedTxt) {
     console.log("The string is a palindrome.");
     alert("The string is a palindrome.");
} else {
     console.log("The string is not a palindrome.");
     alert("The string is not a palindrome.");
}
//question3
function largestWord(str) {
     let words = str.split(" ");
     let maxlen = words[0].length;
     let largest = words[0];
     for (let i = 1; i < words.length; i++) {
          if (words[i].length > maxlen) {
               maxlen = words[i].length;
               largest = words[i];
          }
     }
     return largest;
}
console.log(largestWord("ali omar ahmed"));
//question4
let namePattern = /^[A-Za-z]+$/;
let nameInput;
do {
     nameInput = prompt("Enter your name:");
} while (!namePattern.test(nameInput));

let phonePattern = /^(010|011|012)\d{8}$/;;
let phonenumberInput;
do {
     phonenumberInput = prompt("Enter your phone number:");
} while (!phonePattern.test(phonenumberInput));
let emailpattern = /\S+@\S+\.\S+/;
;
let emailInput
do {
     emailInput = prompt("Enter your email address:");
} while (!emailpattern.test(emailInput));
let color;
do {
     color = prompt("Choose color: red, green, or blue");
     if (color) color = color.toLowerCase();
} while (color !== "red" && color !== "green" && color !== "blue");
document.write("<h1 style= color You selected " + color + " color</h1>");
document.write("your name is " + nameInput + "<br>");
document.write("your phone number is " + phonenumberInput + "<br>");
document.write("your email is " + emailInput + "<br>");
