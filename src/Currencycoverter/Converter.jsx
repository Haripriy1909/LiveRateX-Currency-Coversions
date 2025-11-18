import React, { useState, useEffect } from 'react';

const Converter = () => {
  const [amount, setAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const currencies = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
    { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
    { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
    { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
    { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
    { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳' },
    { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
    { code: 'KRW', name: 'South Korean Won', flag: '🇰🇷' }
  ];

  const fetchExchangeRate = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
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
        'USD-EUR': 0.85,
        'USD-GBP': 0.73,
        'USD-JPY': 110,
        'USD-CAD': 1.25,
        'USD-AUD': 1.35,
        'USD-CHF': 0.92,
        'USD-CNY': 6.45,
        'USD-INR': 74.5,
        'USD-KRW': 1180,
        'EUR-USD': 1.18,
        'EUR-GBP': 0.86,
        'GBP-USD': 1.37,
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
    num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const converted = exchangeRate ? (parseFloat(amount) || 0) * exchangeRate : 0;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="w-full">
        <div className=" mt-2.5 text-center mb-12">
          <h1 className=" mt-6 bg:text-6xl text-6xl font-bold text-blue-400">
            <span className="text-amber-500">C.</span>Converter
          </h1>
          <p className="text-gray-400 text-xl mt-3">Live currency exchange with history</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 p-6 rounded-xl w-full">
          <div>
            <label className="block mb-2 font-semibold text-3xl">From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-600 bg-black text-white mb-4"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code} - {c.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-600 bg-black text-white"
              placeholder="Enter amount"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-3xl">To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-600 bg-black text-white mb-4"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code} - {c.name}
                </option>
              ))}
            </select>
            <div className="p-4 border rounded-md bg-gray-800 text-xl font-bold text-green-400 min-h-[60px]">
              {loading ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin mr-2"></div>
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
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all font-medium"
          >
            ⇅ Swap Currencies
          </button>
        </div>

        {exchangeRate && !loading && (
          <div className="text-center mt-10 mb-12">
            <p className="text-gray-400 text-2xl">Exchange Rate:-</p>
            <p className="text-xl font-semibold mt-2">
              1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
            </p>
            <button
              onClick={fetchExchangeRate}
              className="mt-4 text-3xl text-white bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded"
            >
              🔄 Refresh
            </button>
          </div>
        )}

        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h2 className=" font-bold mb-4 text-blue-400 text-5xl">Conversion History</h2>
          {history.length === 0 ? (
            <p className="text-gray-500">Not history yet.</p>
          ) : (
            <ul className="space-y-3 max-h-[300px] overflow-y-auto">
              {history.map((item) => (
                <li
                  key={item.id}
                  className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800"
                >
             
                  <p className="font-medium text-3xl">
                    {item.amount} {item.from} → {format(item.converted)} {item.to}
                  </p>
                  <p className="text-2xl text-gray-400">
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
