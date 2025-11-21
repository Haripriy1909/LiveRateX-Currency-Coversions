import React, { useState, useEffect } from "react";

const Converter = () => {
  const [amount, setAmount] = useState("100");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const currencies = [
    { code: "USD", name: "US Dollar", flag: "🇺🇸" },
    { code: "EUR", name: "Euro", flag: "🇪🇺" },
    { code: "GBP", name: "British Pound", flag: "🇬🇧" },
    { code: "JPY", name: "Japanese Yen", flag: "🇯🇵" },
    { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦" },
    { code: "AUD", name: "Australian Dollar", flag: "🇦🇺" },
    { code: "CHF", name: "Swiss Franc", flag: "🇨🇭" },
    { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳" },
    { code: "INR", name: "Indian Rupee", flag: "🇮🇳" },
    { code: "KRW", name: "South Korean Won", flag: "🇰🇷" },
  ];

  const fetchExchangeRate = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await res.json();
      const rate = data.rates[toCurrency];
      setExchangeRate(rate);

      const result = {
        id: Date.now(),
        from: fromCurrency,
        to: toCurrency,
        amount: parseFloat(amount),
        converted: (parseFloat(amount) || 0) * rate,
        rate,
        time: new Date().toLocaleTimeString(),
      };

      setHistory([result, ...history.slice(0, 9)]);
    } catch {
      const fallback = {
        "USD-EUR": 0.85,
        "USD-GBP": 0.73,
        "USD-JPY": 110,
        "USD-CAD": 1.25,
        "USD-AUD": 1.35,
        "USD-CHF": 0.92,
        "USD-CNY": 6.45,
        "USD-INR": 74.5,
        "USD-KRW": 1180,
        "EUR-USD": 1.18,
        "EUR-GBP": 0.86,
        "GBP-USD": 1.37,
      };
      const rate = fallback[`${fromCurrency}-${toCurrency}`] || 1;
      setExchangeRate(rate);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const format = (num) =>
    num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const converted = exchangeRate
    ? (parseFloat(amount) || 0) * exchangeRate
    : 0;

  return (
  <div className="min-h-screen bg-black text-white p-5 sm:p-8 pt-24 sm:pt-32">

      <div className="max-w-5xl mx-auto">

       
        <div className=" flex text-center mb-10 mt-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mt5 sm:mt-4 md:mt-6">
  <span className="text-amber-500">C.</span>Converter
</h1>

          <p className="text-gray-400 text-lg sm:text-xl mt-7 ml-3">
            Live currency exchange with history
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900 p-6 rounded-xl shadow-lg">

       
          <div>
            <label className="block mb-2 font-semibold text-xl sm:text-2xl">
              From
            </label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-700 bg-black text-white mb-4"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code} — {c.name}
                </option>
              ))}
            </select>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-700 bg-black text-white"
              placeholder="Enter amount"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-xl sm:text-2xl">
              To
            </label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-700 bg-black text-white mb-4"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code} — {c.name}
                </option>
              ))}
            </select>

            <div className="p-4 rounded-lg bg-gray-800 text-lg sm:text-xl font-bold text-green-400 min-h-[60px]">
              {loading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin mr-2"></div>
                  Converting...
                </div>
              ) : (
                <span>{format(converted)}</span>
              )}
            </div>
          </div>
        </div>

       
        <div className="flex justify-center mt-6">
          <button
            onClick={swap}
            className="bg-blue-600 hover:bg-blue-700 px-5 sm:px-7 py-3 rounded-lg transition text-lg sm:text-xl"
          >
            ⇅ Swap Currencies
          </button>
        </div>

     
        {exchangeRate && !loading && (
          <div className="text-center mt-10 mb-10">
            <p className="text-gray-400 text-lg sm:text-xl">Exchange Rate:</p>
            <p className="text-lg sm:text-2xl font-semibold mt-2">
              1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
            </p>

            <button
              onClick={fetchExchangeRate}
              className="mt-4 text-xl sm:text-2xl bg-amber-600 hover:bg-amber-700 px-5 py-2 rounded-lg"
            >
              🔄 Refresh
            </button>
          </div>
        )}

      
        <div className="bg-gray-900 p-6 rounded-xl shadow-md mt-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Conversion History
          </h2>

          {history.length === 0 ? (
            <p className="text-gray-500">No history yet.</p>
          ) : (
            <ul className="space-y-3 max-h-[300px] overflow-y-auto">
              {history.map((item) => (
                <li
                  key={item.id}
                  className="border border-gray-700 p-4 rounded-lg hover:bg-gray-800 transition"
                >
                  <p className="text-xl sm:text-2xl font-semibold">
                    {item.amount} {item.from} → {format(item.converted)}{" "}
                    {item.to}
                  </p>
                  <p className="text-gray-400 text-base sm:text-lg">
                    Rate: 1 {item.from} = {item.rate.toFixed(4)} {item.to}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default Converter;
