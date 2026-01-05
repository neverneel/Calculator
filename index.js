// Calculator Program
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value +=  input;
}

function clearDisplay(){
    display.value = "";
}

function backSpace(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch{
        display.value = "error";
    }
}

document.addEventListener("keydown", (e)=>{
    if(e.key >= "0" && e.key <= "9" ){
        appendToDisplay(e.key);
    }
})