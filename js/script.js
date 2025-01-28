let randomIndex = Math.floor(Math.random()*quotes.length);
let blockQuoteElement = document.querySelector('#qoute-of-the-day');

blockQuoteElement.innerHTML = quotes[randomIndex].quote;
console.log(randomIndex, quotes[randomIndex])