// [1, 3, 2]
function getGreatestNumber(a){
    let Gnum = 0;
    for(let i = 0; i < a.length; i++){
        if (a[i] > Gnum){
           Gnum = a[i];
        }
    }
    return Gnum;
}

const arr = [1, 3, 2, 10];
console.log(getGreatestNumber(arr));