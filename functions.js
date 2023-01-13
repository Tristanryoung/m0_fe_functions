// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

// function printGreeting() {
//     console.log("How are you today?");
// }
// printGreeting();
// printGreeting();
// printGreeting();

// // 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

// function morningGreeting(firstName) {
//     console.log(`"Hello ${firstName}, you look lovely today"`);
// }
// morningGreeting("Tristan");

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function reportPayRange(companyName, maxPay, minPay) {
    var sum = (maxPay-minPay);
    var companyName = "Amazon";
    var maxPay = 100000;
    var minPay = 70000;
    var payRange = (maxPay-minPay);
    console.log(`"The Company ${companyName} has a pay range of ${payRange} dollars"`)
    return sum;   
}
reportPayRange("Amazon", 100000, 70000);

    




// 4: Write a function that satifies the following interaction pattern:

function checkStock (quantity, ingredientName) {
    if (quantity >=1 && quantity <=3) {
        console.log(`"${ingredientName} - running LOW"`)
    } else if (quantity >=4) {
        console.log (`"${ingredientName} is stocked"`)
    } else {
        console.log(`"${ingredientName} - OUT of stock!"`)
    }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"