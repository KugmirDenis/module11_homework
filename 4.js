let getDistance = function(a, b) {
    console.log('start:', a);
    
    let stopInterval = setInterval(() => {
      a++;
      if (a === b) {
        clearInterval(stopInterval)
    }
    
    console.log('number:', a)
  }, 1000);
    console.log('end:', b)
  }
  
  getDistance(5, 9)