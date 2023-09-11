import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => setCurrencyData(data[currency]));
  }, [currency]);

  return currencyData;
};

export default useCurrencyInfo;
