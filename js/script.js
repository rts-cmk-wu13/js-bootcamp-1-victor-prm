let randomIndex = Math.floor(Math.random()*quotes.length);
let blockQuoteElement = document.querySelector('#quote-of-the-day');
let authorElement = document.querySelector('#quote-of-the-day-author');

blockQuoteElement.innerHTML = quotes[randomIndex].quote;
authorElement.innerHTML = quotes[randomIndex].author;
