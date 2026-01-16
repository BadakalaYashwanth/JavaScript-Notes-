function loadata() {
    return new Promise((resolve) => {
        setTimeout = (() => {
            resolve("Data loaded")
        }, 2000);
    })
}

async function showData() {
    console.log("Loading...")

    const result = await loadata();

    console.log(result)
    console.log("Done")


}

showData()
