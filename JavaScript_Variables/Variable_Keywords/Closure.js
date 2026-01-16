{
    let x = 10;
    let message = "Hello from the block!";  // block-scoped variable

    function printX() {
        console.log(x);        // closure over x
        console.log(message);  // closure over message
    }
    printX();
}
