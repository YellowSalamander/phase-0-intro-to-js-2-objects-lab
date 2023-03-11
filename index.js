// Write your solution in this file!
const employee = {}
employee.name = "Sam"
employee.streetAddress = "5709"

function updateEmployeeWithKeyAndValue(obj, key, value){
const newObj = {...obj}
newObj[key] = value
return newObj
}
const updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 broadway",)

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
obj[key] = value
return obj
}

function deleteFromEmployeeByKey(obj, key,){
    const newObj = {...obj}
    delete newObj[key]
    return newObj
}
const deletedEmployeeKey = deleteFromEmployeeByKey(employee,"name","Sam")


function destructivelyDeleteFromEmployeeByKey (obj,key){
delete obj[key]
return obj
}
const forcedDeletedEmployeeKey = destructivelyDeleteFromEmployeeByKey(employee,"name","sam")

console.log(updatedEmployee1)
console.log(employee)
console.log(deletedEmployeeKey)
console.log(forcedDeletedEmployeeKey)




