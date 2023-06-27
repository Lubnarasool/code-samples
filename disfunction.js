function calculateDiscount(price, perc){
    let disAmt = price*perc/100;
    let finalAmt = price-disAmt;
    return finalAmt
}
 
// console.log(calculateDiscount(9000, 5))

const prices = [9000, 200, 800, 3000, 10000, 7600];
for (let i = 0; i < prices.length; i++){
    const finalAmount = calculateDiscount(prices[i],5);
    console.log(finalAmount)
}