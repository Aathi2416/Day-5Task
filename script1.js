// JSON iteration using for in loop
var student = {
    "firstName": "Aathi" ,
    "lastName": "Lakshmi" ,
"age": 28,
"gender":"female",
"Education":"b.com",

}
for(var a in student){
    console.log(a,student[a])
}
// JSON iteration using for  loop

var student = {
    "firstName": "Aathi" ,
    "lastName": "Lakshmi" ,
"age": 28,
"gender":"female",
"Education":"b.com",

}
for(var i=0;i<student.length;i++){
    console.log(student[i])
}

// JSON iteration using forEach

var student = {
    "firstName": "Aathi" ,
    "lastName": "Lakshmi" ,
"age": 28,
"gender":"female",
"Education":"b.com",
}
const keys = Object.keys(student)
keys.forEach(key =>{
    console.log(key,student[key])
})

// JSON iteration using for of loop

var student = [{
    "firstName": "Aathi" ,
    "lastName": "Lakshmi" ,
"age": 28,
"gender":"female",
"Education":"b.com",
}]
for (var a of student){
    console.log(a,student[a])
}