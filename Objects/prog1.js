

// Objects is the most importent in js and all data type are object 
// object can store multiple value in one variable 



const mysym=Symbol ("Anupam") //  for  Symboll data type 

// How to decler 

const jsuser={

name:"Hitesh", // Key_name : Value 

[mysym]:"Anupam_bhunia", //  for  Symboll data type  

age : "18",

location: "Jaipur",

email: "hiteshgoogle.com",

islogin: false,

lastlogin:["Monady","Saturday"],

}


// Excution 

console.log(jsuser.name);   // another process 
console.log(jsuser["name"]);  // another process 

console.log( jsuser[mysym]);
console.log( jsuser.age);

