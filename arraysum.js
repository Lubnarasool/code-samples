 function arraySum(arr){
    sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum+arr[i];
    }
    return sum;
}

const prices = [1000, 2000, 3000, 4000];

console.log( arraySum(prices) );
console.log( arraySum([3, 4, 5, 10]) );