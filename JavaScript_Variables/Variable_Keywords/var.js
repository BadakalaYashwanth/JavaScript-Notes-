function var1() {
    var x;      // declaration
    x = 10;     // assignment

    if (x == 10) {
        var y = 20;  // initialization
        y = 30;      // assignment
        y = 40;      // reassignment
        var y = 50;  // shadowing
    }

    console.log("x = " + x);
    console.log("y = " + y);
}

var1();
