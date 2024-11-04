function getSum(num1){
    return function(num2) {
      return num1 + num2;
    }
  }
  
  const sumNum = getSum(7);
  console.log(sumNum(8))