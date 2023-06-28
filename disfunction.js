function calculateDiscount(price, perc){
    let disAmt = price*perc/100; //9000*5/100 = 450
    let finalAmt = price-disAmt; //9000-450 =8550
    return finalAmt
}
 
// console.log(calculateDiscount(9000, 5))

const prices = [9000, 200, 800, 3000, 10000, 7600];
for (let i = 0; i < prices.length; i++){
    // const finalAmount = calculateDiscount(prices[i],5);
    //   console.log(finalAmount)
      if(prices[i]>5000){
        const finalAmount = calculateDiscount(prices[i],10);
        console.log(finalAmount)
      }

      else{
        const finalAmount = calculateDiscount(prices[i],5);
        console.log(finalAmount)
      }

}
