// Get Quote from API
async function getQuote() {
    const apiUrl = "https://type.fit/api/quotes/?method=getQuote&lang=en&format=json";
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

    } catch (error) {
        getQuote();
        console.log("whoops, no quote", error);
    }
}

//On Load
getQuote();