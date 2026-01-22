// ================================
// FUNCTION THAT RETURNS A PROMISE
// ================================

function verifyTask(status) {
    return new Promise(function (resolve, reject) {

        // Promise starts in PENDING state

        if (status === true) {
            // Promise moves to RESOLVED state
            resolve("Task completed successfully");
        } else {
            // Promise moves to REJECTED state
            reject("Task failed");
        }

    });
}

// ================================
// USING THE PROMISE
// ================================

console.log("Start");

// Actual call
verifyTask(true)
    .then(function (successMessage) {
        // Runs only if resolve() is called
        console.log("RESOLVED:", successMessage);
    })
    .catch(function (errorMessage) {
        // Runs only if reject() is called
        console.log("REJECTED:", errorMessage);
    });

console.log("End");
