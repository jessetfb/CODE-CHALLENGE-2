function swapCase(inputStr) {
    
    let characters = inputStr.split('');
  
    
    for (let i = 0; i < characters.length; i++) {
      let char = characters[i];
      
      if (char === char.toUpperCase()) {
        
        characters[i] = char.toLowerCase();
      } else {

        characters[i] = char.toUpperCase();
      }
    }
    return characters.join('');
  }
  
  console.log(swapCase('The Quick Brown Fox')); 