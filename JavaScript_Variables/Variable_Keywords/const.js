
    // Valid initialization
    const price = 500;
    console.log("Price =", price);

    // ❌ Not allowed: redeclaration in same block
    // const price = 600;  // Error

    // ❌ Not allowed: reassignment
    // price = 600;        // Error

{
    // ✔ Allowed (new block) new block will allow
    const price = 999;
    console.log("Price in new block =", price);
}

// ❌ Hoisting error example
// console.log(rate); // Error: cannot access 'rate' before initialization
const rate = 100;