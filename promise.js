
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Promise resolved");
    } else {
        reject("Promise rejected");
    }
});

promise.then((result) => {
    console.log(result)
})
    .catch((error) => {
        console.error(error)
    })