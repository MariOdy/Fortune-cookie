import React from "react";
import useQuotes, { Quote } from "src/utils/useQuotes";
import { Cookie, LeftPartCookie, Paper, RightPartCookie } from "./styles";

const FortuneCookie: React.FC = () => {
  const quotes = useQuotes();

  const [quote, setQuote] = React.useState<Quote | null>(null);

  const { text, author } = quote || {};

  const [isOpen, setIsOpen] = React.useState(false);

  const changeQuote = () => {
    let newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(newQuote);
  };

  const onCookieClick = (e) => {
    e.preventDefault();
    setIsOpen((prev) => {
      if (!prev) changeQuote();

      return !prev;
    });
  };

  return (
    <Cookie type="button" onClick={onCookieClick} data-cracked={isOpen}>
      <Paper>
        <p>{text}</p>
        <span>({author ? author : "someone..."})</span>
      </Paper>
      <LeftPartCookie src="/images/cookie.png" alt="left-cookie" />
      <RightPartCookie src="/images/cookie.png" alt="right-cookie" />
    </Cookie>
  );
};

export default FortuneCookie;
