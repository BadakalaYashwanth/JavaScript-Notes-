function outer() {
    let secret = 10;

    function inner() {
        console.log("Secret:", secret);

        function inner2() {
            let new_value = secret + 2;
            console.log("New value:", new_value);
        }

        return inner2;
    }

    return inner;
}

const fn = outer();   // returns inner
const fn2 = fn();    // runs inner, returns inner2
fn2();               // runs inner2
