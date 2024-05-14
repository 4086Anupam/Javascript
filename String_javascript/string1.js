const name="Anupam";

console.log(name.charAt(2));

console.log(name.toUpperCase());

const repocount=50;


console.log(name+ repocount ); // This is old or beginer method of string access


console.log(`My name is ${name}\n and my repocount ${repocount}`);  // This is new method of string access


const gameName=new String ("Hitesh")

console.log(gameName);


console.log(gameName.charAt(2)); //  indexes the string as a sequence


console.log(gameName.indexOf("e")); // found index number 

console.log(gameName.length); // length of string 


console.log(gameName.toUpperCase());  // for uppeer case 


console.log(gameName.toLocaleLowerCase()); // for lower case 


const anotherName=gameName.substring(0,4); // for substing 
console.log(anotherName);


const anotherNameone =gameName.slice(-8,4) // for slice 
console.log(anotherNameone);



const familyName="      Bhunia      "
console.log(familyName);
console.log(familyName.trim()); // not use space 



const url= "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt" // for url 
console.log(url.replace("/web/","weds"));
