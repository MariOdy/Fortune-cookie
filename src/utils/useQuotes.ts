import { useEffect, useState } from "react";

type quotesProps = {
  text: string;
  author: string;
};

const useQuotes = () => {
  const [quotes, setQuotes] = useState<quotesProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://type.fit/api/quotes", {
        method: "GET",
      });
      const jsonData = await data.json();
      setQuotes(jsonData);
    };

    api();
  }, []);

  return quotes
};

export default useQuotes;
