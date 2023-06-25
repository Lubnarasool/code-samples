//applies 10% discount on input price
function discount(price){
    const discAmount = price*10/100;
    const dicountedPrice = price - discAmount;
    return dicountedPrice;
}
const amount = discount(10000); //9000
const amount2 = discount(5000); //4500

const prices = [200, 420, 690, 80, 100, 120, 140, 160];
for (let i = 0; i < 8; i++){
  if (prices[i] > 500){
    console.log(discount(prices[i]));
  }
  else {
    console.log(prices[i]);
  }
}
