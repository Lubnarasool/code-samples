// write a function named calculator that will accept 3 parameters (num1, num2, operator). num1 and num2 is of type
// integer and operator is of type string. The function will perform an action on two numbers based on the
// operator parameter. for example:
// if num1 is 5 and num2 is 3 and operator is "+", The  function will perform addition and should return 8.
// if num1 is 5 and num2 is 3 and operator is "-", The  function will perform subtraction and should return 2.  
// if num1 is 5 and num2 is 3 and operator is "*", The  function will perform multiplication and should return 15.  
// if num1 is 5 and num2 is 3 and operator is "/", The  function will perform divisiooin and should return 1.6. 
function calculator(num1, num2, operator){
    let result = 0;
    if(operator === "+"){
      result = num1 + num2
    }
    if(operator === "-"){
        result = num1 - num2
    }
    if(operator === "*"){
        result = num1 * num2
    }
    if(operator === "/"){
        result = num1 / num2
    }
    return result
}
 
console.log(calculator(5,3,"+"))
console.log(calculator(5,3,"-"))
console.log(calculator(5,3,"*"))
console.log(calculator(5,3,"/"))

