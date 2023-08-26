// let username ;
// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = username ;
// }

// let age = window.prompt("Hello how are you !!");
// age+=1;
// console.log("Happy Birthdat ! you are " + age + "years ol

// let x;
// let y ;
// let z ;
// x = Number("3.14");
// y = String (3.14);
// z = Boolean("Pizza");
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z) 

// let pi = 3.14  ;
// let radius ;
// let circumference;
// radius = window.prompt("Enter the raduis of circle :");
// circumference  = 2 * pi * radius;
// console.log(circumference);

// let x = 3.14;
// x = Math.round(x)
// console.log(x)

// let x = 4;
// x = Math.pow(x,3);
// console.log(x);

// let a ;
// let b ;
// let c ;
// a = window.prompt("Enter side a :");
// a = Number(a);

// b = window.prompt("Enter side b :");
// b = Number(b);

// // c = Math.pow(a,2) + Math.pow(b,2);

// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
// console.log(c)


// let a ;
// let b ;
// let c ;
// document.getElementById("sub-button").onclick = function () {
//     a = document.getElementById("aTextBox").value;
//     a = Number(a);
//     b = document.getElementById("bTextBox").value;
//     b = Number(b);
//     c  =  Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
//     document.getElementById("cLabel").innerHTML = "Side C :" + c ;
// }

//step count 
// let count = 0 ;
// document.getElementById("d-crease").onclick = function () {
//     count -=1;
//     document.getElementById("counter").innerHTML = count;
// }
// document.getElementById("r-crease").onclick = function () {
//     count =0;
//     document.getElementById("counter").innerHTML = count;
// }   
// document.getElementById("i-crease").onclick = function () {
//     count +=1;
//     document.getElementById("counter").innerHTML = count;
// }

// step2 get success
// let x ;
// let y ;
// let z ;
// document.getElementById("button").onclick = function () {
//     x = Math.floor(Math.random() * 7) +1 ;
//     y = Math.floor(Math.random() * 7) +1 ;
//     z = Math.floor(Math.random() * 7) +1 ;
//     document.getElementById("x-label").innerHTML = x;
//     document.getElementById("y-label").innerHTML = y;
//     document.getElementById("z-label").innerHTML = z;
// }

// let age = 12;
// if(age >= 18 ){
//     console.log("You are adult");
// }
// else {
//     console.log("You are child")
// }

    //step 3 get success;
    // document.getElementById("mybutton").onclick = function () {
    // const myCheckbox = document.getElementById ("myCheckbox")
    // const myVisa = document.getElementById("myVisa")
    // const myMasterCard = document.getElementById("myMasterCard")
    // const myPaypal = document.getElementById("myPaypal")
    // if ( myCheckbox .checked){
    //     console.log("You are subcribed !");
    // }
    // else {
    //     console.log("You are not subcribed")
    // }
    // if(myVisa.checked){
    //     console.log("You are payying with visa");
    // } 
    // else if (myMasterCard.checked){
    //     console.log("You are payying with mastercard")
    // }
    // else if (myPaypal.checked){
    //     console.log("You are payying with paypal")
    // }
    // else {
    //     console.log("You must select radio type below")
    // }
// }

// let temp  = 20 ;
// let sunny = false ;
// if ( temp > 0 && temp < 30 && sunny){
//     console.log("The weather is good");
// }
// else {
//     console.log("The weather is bad")
// }

// let username = "" ;
// while ( username == "" || username == null ) { 
//     username = window.prompt ("Enter your name ::")
// }
// console.log ("Hello",username)


//step4 success
// let rows = window.prompt ("Enter # of row ::")
// let column = window.prompt ("Enter # of columns ::")

// for ( let i = 1 ; i <= rows ; i+=1){
//     for ( let j = 1 ; j<= column ; j+=1){
//         document.getElementById("myRectangle").innerHTML +=j ;
//     }
//     document.getElementById("myRectangle").innerHTML +="<br>" ;
// }


// function myFunction(){
//     console.log("Happy Bithday to you ")
// }
// myFunction()

// let area ;
// let width ;
// let height ;
// width = window.prompt ("Enter width ::");
// height = width.prompt ("Enter height ::") ;
// area = getArea(width,height) ;
// console.log("The area is ::" ,area);
// function getArea(width,height){
//     return width * height ;
// }



// let width;
// let height;
// let area ;
// width = window.prompt("Enter width =");
// height = window.prompt("Enter height =")
// area = getArea(width , height);
// console.log ("The area is ::" ,area);

// function getArea(width , height) {
//     return width * height ;
// }

// let adult = checkAge(21);
// console.log(adult)
// function checkAge(age){
//     if ( age >= 18) {
//         return true ;
//     }
//     else {
//         return false ;
//   

// let username = "Art Samoeurn";
// let item = 3 ;
// let dollar= 5;

// let text = `Hello ${username} You have ${item} item in your card in your total $${dollar}`

// document.getElementById("myLabel").innerHTML=text



// Step4 4 game guessing and get success
// const answer = Math.floor(Math.random() * 10 + 1);
// // let guesses = 0 ;
// document.getElementById("button").onclick = function() {
//     let guess = document.getElementById("myLabel").value
//     // guesses += 1;
//     if ( guess == answer ){
//         alert(`${answer} is the # , It took you ${guess} guess (Note:If you succeed, you can adore me.)`  )
//     }
//     else if (guess < answer ) {
//         alert("Too small")
//     }
//     else {
//         alert("Too large!")
//     }
// }


// let temp;
// document.getElementById("submitbutton").onclick = function(){
//     if (document.getElementById("cbutton").checked){
//         temp = document.getElementById("textbox").value;
//         temp = Number(temp);
//         temp = toCelsius(temp);
//         document.getElementById("templabel").innerHTML = temp +"C"
//     }
//     else if (document.getElementById("fbutton").checked){
//         temp = document.getElementById("textbox").value;
//         temp = Number(temp);
//         document.getElementById("templabel").innerHTML = temp + "F"
//     }
//     else {
//         document.getElementById("templabel").innerHTML = "Select a unit"
//     }
// }
// function toCelsius(temp){
//     return (temp-32)*(5/9)
// }
// function toFahrenheit(temp){
//     return (temp*(9/5)) + 32 ;
// }






