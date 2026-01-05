// Calculator Program
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value +=  input;
}

function clearDisplay(){
    display.value = "";
}

document.addEventListener("keydown", (c)=>{
    if(c.key == "Delete"){
        clearDisplay();
    }
})

function backSpace(){
    display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", (b)=>{
    if(b.key === "Backspace"){
        backSpace();
    }
})

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch{
        display.value = "error";
    }
}

document.addEventListener("keydown", (result)=>{
    if(result.key === "Enter"){
        calculate();
    }
})

document.addEventListener("keydown", (e)=>{
    if(e.key >= "0" && e.key <= "9" ){
        appendToDisplay(e.key);
    }
})

document.addEventListener("keydown", (add)=>{
    if(add.key == "+" ){
        appendToDisplay(add.key);
    }
})

document.addEventListener("keydown", (minus)=>{
    if(minus.key == "-" ){
        appendToDisplay(minus.key);
    }
})

document.addEventListener("keydown", (multiply)=>{
    if(multiply.key == "*" ){
        appendToDisplay(multiply.key);
    }
})

document.addEventListener("keydown", (divide)=>{
    if(divide.key == "/" ){
        appendToDisplay(divide.key);
    }
})

