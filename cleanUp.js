// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();

// codeblock was missing a semicolon after the console log statement
// the function call was also missing a semi colin
// these changes were performed to execute proper js synstax

// // EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}
addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// This codeblock was missing a semi-colon after third, and the final curly bracket was out of position i.e not flush with flush and var
// these changes were performed to ensure proper formatting of the codeblock and as well as proper syntax with the var sum statement

// // EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();

// This function would not run due to func being declared rather than function before the function name
// There was no indent following proper syntax when starting the codeblock with a curly bracket
// The final curly bracket closing the code block was not flush with the top function line
// There changes were necessary to call the function as the function declaration was incorrect "func", other edits followed proper syntax and formatting with a tab following the function name before the first curly bracket, and shifting the final curly bracket to close the code block with proper formatting


// //  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`"The average is: ${avg}."`)
}

average(10, 30);
//  This function first had a formatting error as the code block first curly should follow the function on the same line
// Within the code block, variables and console log should all be indented with the first letter flush with one another
// Within the console log, quotes were needed to properly run the sentence "The average is", there quotes are inside the back tics due to interpolation of the avg variable
// This function had no call statement, so it would not run without adding name of function + (); average();
// With no two numbers in the call statement, the function runs as "The average is: NaN.. not a number i am guessing, but it works when calling average(2, 20); returning 11, for example"