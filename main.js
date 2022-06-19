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

const objArray = [];
function creatObjectArray(){

    const userObj = {
        firstName: "" ,
        lastName: "" ,
        dateOfBirth: "" ,
        mail: ""
    }

    for(key in userObj){
        objArray.push(userObj)
    }

    printObjectArray(objArray)
    console.log(objArray)

}

function printObjectArray(someArray){
    let table = document.createElement("table")
    someArray.forEach(item => {
        for(key in item){
            table.innerHTML += "<tbody><tr><td>"+`${key} : `+"</td></tr></tbody>"
            document.body.append(table)
        }
    })
}




function getLastChar(strArray){
    return strArray[(strArray.length)-1]
}
//1 iteration

const charsArray = ["B","a","t","e","l"]
const longerCharsArray = ["B","a","t","e","l","H","a","i","y","l","o"]

function printEveryChar(){

    charsArray.forEach( letter => 
        console.log("first loop output:" + letter) )
//  5 iteration

    longerCharsArray.forEach( letter => 
        console.log("second loop output:" + letter) )
//  11 iteration
}

function sortNumbersArray(numArr) {
                
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < numArr.length; j++) {
            if (numArr[j] > numArr[j + 1]) {
                let saveBiggeNum = numArr[j];
                numArr[j] = numArr[j + 1];  //replace spots smaller forword
                numArr[j + 1] = saveBiggeNum;
            }
        }
    }
    return numArr;
}
const numbersArray = [5, 1, 4, 2, 8];
console.log(sortNumbersArray(numbersArray));  //[1, 2, 4, 5, 8]
    
function binarySearch(numbersArray, wanntedNum) {
    let smallerNumbers = 0;
    let biggerNumbers = numbersArray.length - 1;
    while (smallerNumbers <= biggerNumbers) {
        const middelNumber = smallerNumbers + Math.floor((biggerNumbers - smallerNumbers) / 2);
        if (numbersArray[middelNumber] === wanntedNum) {
            return middelNumber;
        }
        if (numbersArray[middelNumber] < wanntedNum) {
            smallerNumbers = middelNumber + 1;
        } else {
            biggerNumbers = middelNumber - 1;
        }
    }
    return -1;
}
