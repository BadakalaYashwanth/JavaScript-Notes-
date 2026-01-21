// FORMAL PARAMETER: action (function)
function executionAction(action, isAction){
    if(isAction){
        action()
    }else {
        console.log("Action not Allowed")
    }
}
// ACTUAL PARAMETER: function
executionAction(
    function(){
        console.log("Access Graneted")
    },
    true
)
executionAction(
    function(){
        console.log("This will not run")
    },
    false
)