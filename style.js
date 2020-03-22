// document.write("Hello Qasim");
// var first_name = "Hello World";
 
//for over write your text 
// you can declare the value again

// document.write(first_name);

// var first, second;
// first = 30;
// second = 40;
// document.write(first , second);

//let
//you can do same work that you did in var but in "let" you can't declare the value again 
// you can assign the value/overwrite

// let firstname = "Qasim";

// document.write(firstname);


//constant variable
//you can do same work that you did in var but in const you can't declare and assign the value again 

// const second = " Maryam";
// second = 'world';
// document.write(second);


// var x = "Abrish";
// document.write(x);
// document.write("<br>");
// document.write( typeof x);


// var x = 50;
// document.write(x);
// document.write("<br>");
// document.write( typeof x);

// var x = true;

// var z;
// document.write(x);
// document.write("<br>");
// document.write( typeof z);



//  x = ["html","css","js"];
//  x = {
//      name: "yahoo",
//      country:"pakistan"
//  }
// document.write(x);
// document.write("<br>");
// document.write( typeof x);


// operators

// var a = 2;
// var b = 4;
// var c = a+b;
 
// document.write(c);



// var a = 2;
// var b = 4;
// var c = a - b;
 
// document.write(c);


// var a = 2;
// var b = 4;
// var c = a / b;
 
// document.write(c); //for division


// var a = 2;
// var b = 4;
// var c = a * b; //multiplication
 
// document.write(c);


// var a = 2;
// var b = 4;
// var c = a % b; //remainder
 
// document.write(c);


// var a = 70;
// var b = 4;
// document.write(a + b);
// document.write("<br>");
 
// document.write(b + 10);

// var a = 10;
// var b = 20;
// var c =( a + b )* 2;

// document.write(c);

//assignment operators
// var a = 10;
// var b = 3;
// a += b;    //arithmetic shorthand

// document.write(a);

//GOOGLE CHROME CONSOLE
/* it can shows your js error in google chrome
also u can check the values here without saving these values in to your document file 
.CONSOLE'S COMMANDS
-LOG====console.log([1,2,3]);
-TABLE===console.table([1,2,3]);
ERROR===console.error("something went wrong.");
.WARN===cosole.warn("this is just warning");
console.clear();
.if you want to know about time then it gives you time in milliseconds(ms),you just write--
.TIME===console.time('test');
console.timeEnd('test');*/

// var x = 60;

// console.table([1,2,3]);

//comparision operators
//TRUE OR FALSE

//IF STATEMENT
//if(condition){}

// var a = 60;
// var b = 50;

// if(a > b){
//     document.write("a is greater");
// }

//LOGICAL OPERATORS

// if(condition1 && condition2){}--both coditions are same ,the result would be true

//if(condition1 || condition2){}--both coditions are same then its mean it is true and also 1 condition is true and the other condition is false then it will run your file

//if !(condition){}
/* condition=true--> it gives u false 
condition = false--> it gives u true */

// var age = 20;

// if(age >= 18 || age <= 21){
//     console.log("yes you are eligible");
// }

//if else
// +concatenation

// var name = ' QASIM';
// var gender = 'male';

// if(gender == 'male'){
//     document.write("Hello Mr." +name);
// } else {
//     document.write("Hello Mrs." +name);
//}

//if else if statement
/*
if(condition 1){

}else if (condition 2){

}else{

}*/

// var a = prompt("Enter Your Percentage%");

// var per = 60;

// if(per >= 80 && per <= 100){
//     document.write("you are in merit.");
// }else if(per >= 60 && per < 80){
//     document.write("you are in Ist division.");
// }else if(per >= 45 && per < 60){
//     document.write("you are in IInd division.");
// }else if(per >= 33 && per < 45){
//     document.write("you are in IIIrd division.");
// }else if(per >= 33){
//     document.write("you are fail.");
// }else{
//     document.write("please enter valid percentage ");
// }


//ternary operator

// var x=7;
// var z;
// (x>10)? z = "True": z = "False";
// document.write(z);

//SWITCH STATEMENT

// var day = 1;


// switch (day) {
//     case 0:

//              document.write("Today is Monday");

//     break;
//     case 1:

//         document.write("Today is Tuesday");

//         break;
//         case 2:

//             document.write("Today is Wednesday");

//        break;
//        case 3:

//         document.write("Today is Thursday");

//           break;
//            case 4:

//             document.write("Today is Friday ");

//            break;
//             case 5:

//                 document.write("Today is Saturday");

//             break;
//               case 6:

//                 document.write("Today is Sunday");

//              break;
             

//                 default:
//                     document.write("Enter The Valid Day.");



// }

//CONFIRM BOX

// var a = confirm("Do You Like Our Website?");

// if(a){
//     alert("Thanks");
// }else{
//     alert("Sorry");
// }


//PROMPT BOX

// var a = prompt("what is your name?");  


// alert(a);

// document.write(a);


//FUNCTIONS
// function functionName(){----function definition/declaration         

// }
//functionName();--calling a function

// function hello(){
//     document.write("Hello EveryBody");
// }

// function yahoo(){
//     document.write("Yahoo");
// }

// hello();
// document.write("<br>");
// hello();
// document.write("<br>");
// yahoo();


//FUNCTIONS WITH PARAMETERS

// function functionName(parameter1,parameter2){
//     statement
// }

// functionName(argument1,argument2);

// function hello(fname = "Maryam", lname = "Qasim"){
//     document.write("Hello " + fname +" "+ lname ,"<br>");
// }
// function sum(a,b){
//     document.write(a+b);
// }

// hello("Yahoo","Baba");
// hello("Yahoo","Baba");  //by default value insert ho jana

// sum(20,30);


//FUNCTIONS WITH RETURN VALUE

// function functionName(parameter1,parameter2){
//     statement
//     return value
// }

// var a = functionName(argument1,argument2);

// function fullname(fname = "Maryam", lname = "Qasim"){
//     var a = fname + " - " + lname;

//     return a;
// }

// var fn = fullname("Hasan","Hamid");
// document.write(fn);

// function sum(math,eng,com){
//     var s = math + eng + com;

//     return s;
// }
// function percentage(tt){
//     var per = tt/300 * 100
//     document.write(per);
// }

// var total = sum(67,78,90);

// percentage(total);

//GLOBAL AND LOCAL VARIABLES

// var a = 10;  <-----Global variable

// function functionName(){
//     var b = 25;   <----Local variable
// }

//global is working in the function and also the outside but local is not working at the outside it is only working inside the function...



// function hello(){
//     var a = "yahoo baba";
//     document.write(a + "<br>");
// }

// hello();
// document.write(a);

//BASIC EVENTS

// function hello(){
//     document.write("Hello Everyone");
// }

//WHILE LOOP --INCREMENT
// var a = 1; 

// document.write("<ul>");
// while(a <= 10){
//     document.write("<li>" + a + ") Hello World</li>");
//     a = a + 1;
// }
// document.write("</ul>");

// var a = 10; //DECREMENT

// document.write("<ul>");
// while(a >= 1){
//     document.write("<li>" + a + ") Hello World</li>");
//     a = a - 1;
// }
// document.write("</ul>");


//DO WHILE LOOP

// var a = 1; 

// do{
//     document.write(a + ") Maryam<br>");
//     // a = a + 1;
//     a++;
// } while(a <= 10)

//FOR LOOP

// for(var a = 1; a <= 10; a++){
//     document.write("Hello World<br>");
// }

//CONTINUE & BREAK
// for(var a = 1; a <= 10; a++){
//     if(a == 3){
//         document.write("Hey : " + a +"<br>");
//         // continue;
//         // break;
//     }
//     document.write("Number : " + a + "<br>");
// }

//FOR EVEN NUMBERS

// for(var a = 1; a <= 100; a++){
//     if(a % 2 == 0) {
//         document.write(a + "<br>");

//     }

// }

//OR ODD NUMBERS

// for(var a = 1; a <= 100; a++){
//     if(a % 2 != 0) {
//         document.write(a + "<br>");

//     }

// }

//NESTED LOOP

// for(var a = 1; a <= 100; a = a+10){ 
//     for(var b = a; b < a+10; b++){ 
//         document.write(b + " "); 

//     }
//     document.write("<br>");

// }

//Example(1)

// for(var a = 1; a <= 10; a++){
//     for(var b = 1; b <= a; b++){
//     document.write(b + " ");
//     }
//     document.write("<br>");

// }

//Example(2)

// for(var a = 1; a <= 5; a++){
//     for(var b = 1; b <= a; b++){
//     document.write(a + " ");
//     }
//     document.write("<br>");

// }


//Example(3)

// for(var a = 5; a >= 1; a--){
//     for(var b = a; b >= 1; b--){
//     document.write(b + " ");
//     }
//     document.write("<br>");

// }

//Example(4)

// for(var a = 5; a >= 1; a--){
//     for(var b = 1; b <= a; b++){
//     document.write(a + " ");
//     }
//     document.write("<br>");

// }

//ARRAYS

// var ary = [10,20,30,40];
// var sum = 0;
// document.write("<ul>");
// for(var a = 0; a <= 3; a++){
// document.write("<li>" + ary[a] + "</li>");
// sum = sum +ary[a];
// }
// document.write("</ul>");
// document.write("Total sum : " + sum);

//*
// var ary = new Array(2);
// var sum = 0;
// ary[0] = 10;
// ary[1] = "Maryam";
// ary[3] = "true";

// for(var g = 0; g < 3; g++){
//     ary[g] = prompt("Enter The Value: ");
// }
// document.write("<ul>");
// for(var a = 0; a < 2; a++){
// document.write("<li>" + ary[a] + "</li>");
// // sum = sum +ary[a];
// }
// document.write("</ul>");
// // document.write("Total sum : " + sum);


// MULTIDIMENSIONAL ARRAY

// var ary = [
//     ["Maryam",20,"Female","BS(SE)"],
//     ["Qasim",21,"Male","BS(CS)"],
//     ["Kiran",21,"Female","BEMS"],
//     ["Tooba",20,"Female","BS(SE)"]
// ];
// for(var a = 0; a < 4; a++){      
//     for(var b = 0; a < 4; b++){
//         document.write(ary[a][b]);

//     }
//     document.write("<br>");
//  }   
   
//ARRAY METHODS
//SORT
// var a = ["Hasan","Hamid","Ayesha","Maryam"];
// document.write(a + "<br><br>");
// a.sort();
// document.write(a + "<br>");

//REVERSE

// var a = ["Hasan","Hamid","Ayesha","Maryam"];
// document.write(a + "<br><br>");
// a.sort();
// document.write(a + "<br>");
// a.reverse();
// document.write(a + "<br>");

//POP--removing last value:
//PUSH--adding a value in the last:

// var a = ["Hasan","Hamid","Ayesha","Maryam"];
// document.write(a + "<br><br>");
// a.pop();

// document.write(a + "<br><br>");
// a.push("Qasim");
// document.write(a + "<br><br>");


//SHIFT--removing the 1st value
//UNSHIFT--adding a value in the first of the existing column

// var a = ["Hasan","Hamid","Ayesha","Maryam"];
// document.write(a + "<br><br>");
// a.shift();
// document.write(a + "<br><br>");
// a.unshift("Abrish");
// document.write(a + "<br><br>");

//CONCAT--for merge your values

// var a = ["Hasan","Hamid","Ayesha","Maryam"];
// var b = ["Qasim","Abrish"];
// var d = ["Kiran","Tooba"];

// var c = a.concat(b,d); //second method
// var b = a.concat("Qasim","Abrish");//first method
// document.write(c);

//JOIN--joining your all values in one line

// var a = ["Hasan","Hamid","Ayesha","Maryam"];
// var b = ["Qasim","Abrish"];
// var c = a.concat(b);
// document.write(c + "<br><br>");
// var d = c.join(" ");//---space 
// document.write(d);


//SLICE==(Start,End)-->index

// var a = ["Hasan","Hamid","Ayesha","Maryam"];
// // var b = ["Qasim","Abrish"];
// document.write(a + "<br><br>");
// var b = a.slice(1 , 3);

// document.write(b + "<br><br>");

//SPLICE

// var a = ["Hasan","Hamid","Ayesha","Maryam"];
// // var b = ["Qasim","Abrish"];
// document.write(a + "<br><br>");
//  a.splice(2,1, "Qasim");

// document.write(a + "<br><br>");

//isArray()==
// var a = ["Qasim","Maryam","Abrish"];
// var a = "Maryam";
// document.write(a + "<br><br>");
// var b = Array.isArray(a);
// if( Array.isArray(a) == "true"){
//     if( Array.isArray(a)){

//     document.write("this is an array");

// }else{
//     document.write("this is not an array");

// }





















