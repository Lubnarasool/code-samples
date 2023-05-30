const prices = [200, 420, 690, 80, 100, 120, 140, 160]
for (let i = 0; i < 8; i++){
  if (prices[i] > 500){
    const discountAmount = prices[i]*10/100
    const discount = prices[i]-discountAmount
    console.log(discount)
  }
  else {
    console.log(prices[i])
  }
}