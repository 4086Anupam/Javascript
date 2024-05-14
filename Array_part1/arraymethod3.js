
// Push Method 


const num=[4,5,6,7,8,9];

 num.push(50)

console.log(num);


// Pop method 

const num2=[10,20,30,40,50];

num2.pop();

console.log(num2);


//  include method

const num3=[7,8,9,4,5,6];

console.log(num3.includes(8));

// unshift method

const num4=[100,200,300,400];

num4.unshift(500);

console.log(num4);

// Shift method

const num5=[85,96,74,20,300];

num5.shift();

console.log(num5);


// indexof  method 

const num6=[85,96,74,20]
console.log(num6.indexOf(20));

// join method 

const num7=[900,1000,1100,1200]

let h=num7.join();
console.log(h);

// slice  method 

const num8=[4000,5000,6000,7000];

let h1=num8.slice(1,3);

console.log(h1);

// splice method 
const num9=[4000,5000,6000,7000];
let h2=num9.splice(0,3);
console.log(h2);


// concat  method 

let family1=["Anupam","Rita","Nitya"];

let family2=["Sunli","Mamoni","Somnath","Tanushree","Shreyashi"];

let bhunia_family=family1.concat(family2);

console.log(bhunia_family);
 

// from method 

console.log(Array.from("Anupam"));


// of  method 

let var1=100;
let var2=200;
let var3=300;
let var4=400;

console.log(Array.of(var1,var2,var3,var4));

