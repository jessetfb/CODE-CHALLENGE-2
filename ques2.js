function generateArray(NUM1, NUM2) {

    let result = [];
    const start = Math.min(NUM1, NUM2);
    const end = Math.max(NUM1, NUM2);

    for (let i = start; i <= end; i++) {
      result.push(i);
    }
  
    return result;
  }
  
  console.log(generateArray(4, 7)); 
  console.log(generateArray(-4, 7)); 