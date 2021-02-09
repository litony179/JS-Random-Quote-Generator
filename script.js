const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#author');
const newQuoteBtn = document.querySelector('#new-quote');
const twitterBtn = document.querySelector('#twitter');
const loader = document.querySelector('#loader');

//Use let because we need to change the "apiQuotes"
let apiQuotes = [];

//show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading
function completeLoad() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//SHow new QUote
function newQuote() {
    loading();
    const singleQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if (singleQuote.author === null) {
        quoteAuthor.textContent = 'Unknown';
    } else {
        quoteAuthor.textContent = singleQuote.author;
    }

    //Check quote length
    if (singleQuote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.add('long-quote');
    }
    //Set quote and hide loader
    quoteText.textContent = singleQuote.text;
    completeLoad();
}

// Get quotes from API
async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert('error detected!', error)
            //error website
    }
}

//Tweet a quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    //Open a new blank tab
    window.open(twitterUrl, '_blank');
}


//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On load
getQuotes();