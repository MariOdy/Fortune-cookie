import React from "react";
import useQuotes from "src/utils/useQuotes";
import { Home, RefreshButton } from "./styles";

const HomePage: React.FC = () => {
  const quotes = useQuotes();
  const quotesTexts = quotes.map((quote) => quote.text);
  const quotesAuthors = quotes.map((quote) => quote.author);

  const [quote, setQuote] = React.useState(
    "Genius is one percent inspiration and ninety-nine percent perspiration."
  );
  const [quoteAuthor, setQuoteAuthor] = React.useState("Thomas Edison");

  const changeQuote = () => {
    let quoteId = Math.floor(Math.random() * quotesTexts.length);
    setQuote(quotesTexts[quoteId]);
    setQuoteAuthor(quotesAuthors[quoteId]);
  };

  return (
    <Home>
      <RefreshButton onClick={changeQuote}>Refresh</RefreshButton>
      <p>"{quote}"</p>
      <span>{quoteAuthor ? quoteAuthor : "someone..."}</span>
    </Home>
  );
};

export default HomePage;
