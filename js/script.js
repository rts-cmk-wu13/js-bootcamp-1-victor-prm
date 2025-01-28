let randomIndex = Math.floor(Math.random()*quotes.length);
let blockQuoteElement = document.querySelector('#quote-of-the-day');
let authorElement = document.querySelector('#quote-of-the-day-author');
console.log(authorElement)

blockQuoteElement.innerHTML = quotes[randomIndex].quote;
authorElement.innerHTML = quotes[randomIndex].author;
//console.log(randomIndex, quotes[randomIndex])