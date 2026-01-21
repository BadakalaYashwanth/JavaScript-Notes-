// FORMAL PARAMETER: student (non primitive object)
function checkStudent(student){
    if(student.marks >= 50){
        console.log(student.name + " Passed")
    }else{
        console.log(student.name + " Failed")
    }
}

//Acutal Parameters: Object
checkStudent({name: "Yashwanth", marks: 89})
checkStudent({name: "Ajil", marks: 49})