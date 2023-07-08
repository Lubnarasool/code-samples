// create a function that receives a number and give "positive" if the number is positive and gives "negative" 
// if the number is negative.
function number(a){
   let result = "";
    if(a > 0){
        result = "positive"
    }
    else{
        result = "negative"
    }
    return result;
}

const num = number(-1);
console.log(num)


