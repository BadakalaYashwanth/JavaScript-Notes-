// ================================
// FUNCTION DECLARATION
// ================================

// marks is a FORMAL PARAMETER
// passMark is a FORMAL PARAMETER
function checkResult(marks, passMark){
    if (marks >= passMark){
        console.log("You are passed")
    }else{

        console.log("You are not passed")
    }
}

// ================================
// FUNCTION CALLS
// ================================

// 75 and 40 are ACTUAL PARAMETERS
checkResult(75, 40);

// 32 and 40 are ACTUAL PARAMETERS
checkResult(32, 40);

// 40 and 40 are ACTUAL PARAMETERS
checkResult(40, 40);
