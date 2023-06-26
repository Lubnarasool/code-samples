function arrAvg(a){
    sum = 0;
    for (let i = 0; i < a.length; i++){
        sum = sum+a[i]
    }
    const avg = sum/a.length;
    return avg
}

console.log(arrAvg([1,2]))