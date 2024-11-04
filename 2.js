function numb(a) {
    if (a > 1000) {
      return 'данные не верны'
    }
    if (a === 1 || a === 0) {
      return 'Число не простое'
    }
   if (a === 2) {
     return 'Простое число';
   }
   if (a % 2 === 0) {
     return 'Число не простое';
   }
   for (let i = 3; i <= Math.sqrt(a); i += 2) {
   if (a % i === 0) {
     return 'Число не простое';
   }
   }
     return 'Простое число';
  }
  
  numb(1)