//Sparar nummer från input fälten till variabler, Box1 och Box2
let calc = $("#calc");
let sub = $("#sub");
//Arrays
let total = [];
let total2 = [];
// Variabler
let sum = 0;
let sum2 = 0;
let end = 0

// Förhindrar att sidan uppdateras 
$("#calcContainer").on("submit", function(){
    return false;
});



const addition = document.getElementById("addition");
addition.addEventListener("click", plus);


// Funktionen för plus-knappen, lägger till talen i array och skriver ut i html. 
function plus () {
   
    sub.empty();
    let B1 = $("#numbers").val();
    sum = 0;
    end = 0;

 
    total.push (B1); 
 
 
 if(total.length == 1 && total2.length == 0) {
   calc.append(B1);
 } else {
    calc.append("+" + B1);
 } 


 $("#numbers").val("");
 return false;

};

//Funktion för minus
const subtract = document.getElementById("subtract");
subtract.addEventListener("click", subtrahera);

function subtrahera () {

    sub.empty();
    let B1 = $('#numbers').val();
    sum = 0;
    end = 0;

    total2.push (B1);

    calc.append("-" + B1);

    $("#numbers").val("");
    return false;
};

// = knappen summerar talen från array total, nollställer calc och skriver ut resultat i html.
const equal = document.getElementById("equal");

equal.addEventListener("click", result)

function result() {
    
    calc.empty();
    
    for (let i = 0; i < total.length; i++){

        sum += parseFloat(total[i]);        
    };

    for (let i = 0; i < total2.length; i++) {

        sum2 += parseFloat(total[i]);
    };
    
    end = sum - sum2;
    sub.append(end);
    total = [];
    total2 = [];

};