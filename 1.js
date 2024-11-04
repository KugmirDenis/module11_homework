function evenOrOdd(){
    const numbers = [5, 6, 7, 8, 'h', 'g', 10];
    
    let evenCount = 0;
    let oddCount = 0;
    let all = 0;
    
    for (let num of numbers) {
     if (num % 2 === 0) {
     evenCount++;
     } else if (num % 2 !== 0) {
     oddCount++;
     } else {
       all++;
     }
    }
    
    console.log(`Количество четных элементов: ${evenCount}`);
    console.log(`Количество нечетных элементов: ${oddCount}`);
    console.log(`Количество остальных элементов: ${all}`);
      }
    evenOrOdd();