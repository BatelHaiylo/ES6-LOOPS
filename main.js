const userDataArray = [{fName:"Batel", lName: "Haiylo", age: 24},{fName:"Chan", lName: "Haiylo", age: 25},{fName:"Ice", lName: "Haiylo", age: 28}]

function printUserData(someArray){
someArray.forEach(item => {
    if(item.age>18){
        document.getElementById("user_data").innerText += "  "+item.fName
    }
    else{
        document.getElementById("user_data").innerText += item.lName
    }
});
}
printUserData(userDataArray)

// userDataArray.forEach(obj => {
//     if(obj.age>18){
//            document.getElementById("user_data").innerText += "  "+obj.fName
//     }
//     else{
//             document.getElementById("user_data").innerText += obj.lName
//     }
// });

const hElements = document.getElementsByClassName("header")
for(let element of hElements){
    console.log(element)
}

document.getElementById("header_color_btn")
document.getElementById("header_text_btn")

function changeClassElementsColor(){
    for(let element of hElements){
        element.style.color = "blue"
    }
}

function changeClassElementsText(){
    for(let element of hElements){
        element.innerText = "Hello"
    }
}

const myObj = {
    filed1: "head",
    filed2: "shoulders",
    filed3: "knees",
    filed4: "thous"
}

for(field in myObj){
    document.getElementById("print_field").innerText = field
}
for(key in myObj){
    console.log(myObj[key])
}

const myObject = {
    firstName: "" ,
    lastName: "" ,
    age:  ""
};

function createElements(){
    for(let key in myObject){

    let labelInput = document.createElement("label");
    labelInput.innerText = `Enter ${key}:`;
    document.body.append(labelInput);

    let userInput = document.createElement("input");
    userInput.id = `${key}_id`;
    document.body.append(userInput);
    }

    let btn = document.createElement("button")
    btn.innerText = "SUBMIT"
    btn.addEventListener("click" ,createObjandReciveDataFromUser);
    document.body.append(btn);

}
createElements()

function createObjandReciveDataFromUser(){
    for(let key in myObject){
        myObject[key] = document.getElementById(`${key}_id`).value
        let header = document.createElement("h3")
        header.innerText = `${key}: ${myObject[key]}`
        document.body.append(header)

    }
}


function creatObjectArray(){
    const objArray = [{},{},{},{}];
    
    let someObj = {
        firstName: "" ,
        lastName: "" ,
        dateOfBirth: "" ,
        mail: ""
    }

    let counter = 0
    for(counter of objArray){
        objArray[counter] = Object.assign(someObj);
    }
    console.log(objArray)
}
creatObjectArray()