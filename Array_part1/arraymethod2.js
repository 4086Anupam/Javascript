// Array Method 


const myarr=[10,20,30,40,50]
console.log(myarr);
console.log(typeof myarr);
console.log(myarr[4]);


// Push Method 

const myarry=[10,20,30,40,50,60,70]

myarry.push(90)  // Adding element in last index in array

console.log(myarry); 


// pop Method 
 const mya=[10,20,30,40,50,60];

mya.pop() // Remove  element from  last index in array

console.log(mya);

// Unshift method 

const myn=[100,2000,3000,4000,5000,600]

myn.unshift(10)  // Adding element in first  index in array

console.log(myn); 

// shift method 

let myarrn=[1,5,9,7,6,3,4]

myarrn.shift() // Remove  element from  first  index in array

console.log(myarrn.shift());

// Indexof Method 

let myarrly=[100,200,300,400,500,600]

console.log(myarrly.indexOf(200));
console.log(myarrly.lastIndexOf(200)); // which postion the number is present 

//  join method 

let myjoin=[10,20,30,4,5]

console.log(myjoin.join()); // Array to string convert 


let myh=[10,20,30,40]
myh.push(300)
console.log(myh);

// Slice method 

 let Myarr=[100,200,300,400]
console.log(Myarr);
myd=Myarr.slice(1,3) // only use for 1 to 2 index position element is print 
console.log(myd);

// splice method 

let marr=[100,200,3000,40100,600]
console.log("A",marr);
mysp=marr.splice(1,3) // only use for 1 to 3 index position element is print
console.log(mysp);

// concute method 


let anupam=["Spiderman","Thor","Premelum","Djj"];

let bhunia=["Monday","Tuesday","Friday"];

let joinarray=anupam.concat(bhunia);

console.log(joinarray);


//  from method  :- 
 
// Creates an array from an iterable object

console.log(Array.from("Anupam"));


// of method :- 

 // Returns a new array from a set of elements.
let var1=100;

let var2=200;

let var3 =300;

console.log(Array.of(var1,var2,var3));

