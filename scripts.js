let display = document.getElementById('display');
let count = 0;
let num =0;
let div =0;
let num_div=0;
var i = 0;
var j = 0;
document.getElementById('display').addEventListener("keyup",function(e){
    e.preventDefault();
    if(e.keyCode === 187){
        addition();
    }
    if(e.keyCode === 189){
        subraction();
    }
    if(e.keyCode === 191){
        division();
    }
    if(e.keyCode === 56){
        multiplication();
    }
    if(e.keyCode === 13){
        result();
    }
    if(e.keyCode === 27){
        allclear();
    }
})
function allclear(){
    display.value = "";
}
function addition(){
    count++;
}
function division(){
    div++;
}
let sub =0;
let num_sub =0;
function subraction(){
    sub++;
}
let multi =0;
let num_multi =0;
function multiplication(){
    multi++;
}
function result(){
    if(count>num){
        const inputstr = display.value
        let firstinput = inputstr.slice(0, inputstr.indexOf("+"));
        var i= 1*firstinput;
        let lastinput = inputstr.slice(inputstr.indexOf("+")+1);
        var j= 1*lastinput;
        var sum = i+j;
        display.value = i+j ;
        num++;
    }
    if(div>num_div){
        const inputstr = display.value
        let firstinput = inputstr.slice(0, inputstr.indexOf("/"));
        let i= 1*firstinput;
        let lastinput = inputstr.slice(inputstr.indexOf("/")+1);
        let j= 1*lastinput;
        if(j==0){
            display.value = "error";
        }
        else{
            display.value = i/j ;
        }
        num_div++;
    }
    if(sub>num_sub){
        const inputstr = display.value
        let firstinput = inputstr.slice(0, inputstr.indexOf("-"));
        let i= 1*firstinput;
        let lastinput = inputstr.slice(inputstr.indexOf("-")+1);
        let j= 1*lastinput;
        display.value = i-j ;
        num_sub++;
    }
    if(multi>num_multi){
        const inputstr = display.value
        let firstinput = inputstr.slice(0, inputstr.indexOf("*"));
        let i= 1*firstinput;
        let lastinput = inputstr.slice(inputstr.indexOf("*")+1);
        let j= 1*lastinput;
        display.value = i*j ;
        num_multi++;
    }
}