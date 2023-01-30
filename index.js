// random quote generator!!!!

import('node-fetch')
/*let randomNumbers = ["ars longa, vita brevis","",3]
console.log(Math.random())
console.log(randomNumbers[0])*/

/*let myQuotes = ['ars longa, vita brevis', 'you only live once', 'keep calm and carry on']*/

let myQuotes = [
    {
      text: "ars longa, vita brevis",
    },
    {
      text: "you only live once",
    },
    {
      text: "keep calm and carry on",
    },
  ]
  
  function newQuote() 
  {
      let quote = myQuotes[Math.floor(Math.random() * myQuotes.length)];
      console.log(quote)
  }
  
  newQuote();