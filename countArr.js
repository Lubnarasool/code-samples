// Create a function that takes an array and gives the the number of elements in that array.
function getArraySize(a){   
    let alif = 0;
    for (let i = 0; i < a.length; i++){
        alif = alif + 1;
    }
    return alif;
}

console.log(getArraySize([6, 9, 1, 3]))