const readline = require("readline");

// ================================
// CHAINABLE OBJECT
// ================================
function Print() {
    return {
        A() {
            console.log("A");
            return this;
        },
        B() {
            console.log("B");
            return this;
        },
        C() {
            console.log("C");
            return this;
        }
    };
}

// ================================
// READ INPUT FROM TERMINAL
// ================================
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Enter methods in order using A B C");
console.log("Example: A B C or C A B or B C");

// ================================
// EXECUTE BASED ON INPUT
// ================================
rl.question("Input: ", function (input) {

    const methods = input.trim().split(" ");
    let obj = Print();   // fresh object

    for (let method of methods) {
        if (typeof obj[method] === "function") {
            obj = obj[method]();
        } else {
            console.log("Invalid method:", method);
            break;
        }
    }

    rl.close();
});
