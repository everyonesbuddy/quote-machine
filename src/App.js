import React, {useState, useEffect} from 'react';
import './App.scss';


let quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"



function App() {
  const [quote, setQuote] = useState("Everything has beauty, but not everyone can see.");
  const [author, setAuthor] = useState("Confucius");
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState(null);

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
    console.log(parsedJSON)
  }


  useEffect(() => {
    fetchQuotes(quoteDBUrl)
  }, [quoteDBUrl])




  function getRandomQuote() {
    let randomInteger = Math.floor(Math.random() * quotesArray.length)
    setRandomNumber(randomInteger);
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
  }
  
//   const OURquotesArray = [{quote: "Everything has beauty, but not everyone can see.", author: "Confucius"}, 
//   {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"}, 
//   {quote: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it", author: "Johann Wolfgang von Goethe"},
//   {quote: "Eighty percent of success is showing up.", author: "Woody Allen"}
// ]




  return (
    <div className= "App">
      <header className="App-header">
        <div id="quote-box">
        <p id="text">{quote}</p>
        <h3 id="author">{author}</h3>
        <button id="new-quote" onClick = {() => getRandomQuote()}>Display Random Quote</button>
        <a href= {encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)} id="tweet-quote">Tweet Quote</a>
        </div>
      </header>
    </div>
  );
}

export default App;
