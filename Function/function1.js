


 function name() {
    console.log('Anupam ');
    console.log('Chanda');
}

name(); // Reference

 // Type 1
 function addnumber(number1,number2) { // Parameter
     console.log(number1+number2);
 }
 addnumber(2,2)  // Argument
 addnumber(2,"2")

 // Type 2

 function Adition(num1,num2){

     var result = num1+num2;
     return result

 }
     result = Adition(5,3);
 console.log(result);

 // Type 3

 function Average(num1,num2){
     return num1+num2;
 }
 result=Average(2,3);
 console.log(result);

 // Type 4
function fun(username) {
    return `${username}  Just Name  `
}
 var result = fun("Anupam")
 console.log(result)