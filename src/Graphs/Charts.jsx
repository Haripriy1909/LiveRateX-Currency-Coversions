import React, { useState, useEffect } from "react";

const currencies = [
  { name: "India", code: "INR", symbol: "₹", flag: "🇮🇳", baseRate: 90.37 },
  { name: "United States", code: "USD", symbol: "$", flag: "🇺🇸", baseRate: 1 },
  { name: "Australia", code: "AUD", symbol: "A$", flag: "🇦🇺", baseRate: 1.52 },
  { name: "United Kingdom", code: "GBP", symbol: "£", flag: "🇬🇧", baseRate: 0.79 },
];

const formatCurrency = (value, code) =>
  ["JPY", "INR"].includes(code) ? value.toFixed(2) : value.toFixed(4);

const getChangeIndicator = (change) => {
  if (change > 0)
    return { symbol: "↗", color: "text-green-400", sign: "+" };
  if (change < 0)
    return { symbol: "↘", color: "text-red-400", sign: "" };
  return { symbol: "→", color: "text-gray-400", sign: "" };
};

const CurrencyCard = ({ currency, rateData }) => {
  const rate = rateData?.rate ?? currency.baseRate;
  const change = rateData?.change ?? 0;
  const { symbol, color, sign } = getChangeIndicator(change);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:scale-[1.03] transition-all duration-300 w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl md:text-3xl">{currency.flag}</span>
          <div>
            <h3 className="text-white font-bold text-lg md:text-xl">
              {currency.code}
            </h3>
            <p className="text-gray-400 text-sm">{currency.name}</p>
          </div>
        </div>

        <div className={`flex items-center gap-1 ${color}`}>
          <span className="text-lg">{symbol}</span>
          <span className="font-semibold">
            {sign}
            {Math.abs(change).toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="bg-black/40 rounded-lg p-3 md:p-4 mb-3 text-center">
        <div className="text-xs md:text-sm text-gray-400 mb-1">1 USD equals</div>
        <div className="text-xl md:text-2xl font-bold text-white">
          {currency.symbol}
          {formatCurrency(rate, currency.code)} {currency.code}
        </div>
      </div>

      <div className="space-y-2 text-sm md:text-base">
        <div className="flex justify-between">
          <span className="text-gray-400">Live Rate:</span>
          <span className="text-white font-mono">
            {currency.symbol}
            {formatCurrency(rate, currency.code)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">24h Change:</span>
          <span className={color}>
            {sign}
            {Math.abs(change).toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400">Live</span>
        </div>
      </div>
    </div>
  );
};



const LiveChart = ({ data }) => {
  if (data.length < 2)
    return <p className="text-gray-400 text-xl md:text-2xl">Loading chart...</p>;

  const width = 800;
  const height = 200;
  const padding = 40;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((value, i) => {
      const x = padding + (i / (data.length - 1)) * (width - padding * 2);
      const y =
        height -
        padding -
        ((value - min) / range) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl mt-7 p-5 border border-white/20 w-full">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
        USD to INR - Live Chart
      </h2>

      <div className="relative w-full h-56 md:h-64 bg-black/20 rounded-lg p-2 md:p-4 overflow-hidden">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
              <path
                d="M40 0 L0 0 0 30"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
          <polyline fill="none" stroke="#06b6d4" strokeWidth="3" points={points} />
        </svg>

        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 -ml-10 md:-ml-14">
          <span>₹{max.toFixed(2)}</span>
          <span>₹{((max + min) / 2).toFixed(2)}</span>
          <span>₹{min.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};




const Chart = () => {
  const [rates, setRates] = useState({});
  const [chartValues, setChartValues] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateRates = () => {
    const newRates = {};
    currencies.forEach(({ code, baseRate }) => {
      const fluctuation = (Math.random() - 0.5) * 0.02;
      const rate = baseRate * (1 + fluctuation);
      const change = ((rate - baseRate) / baseRate) * 100;
      newRates[code] = { rate, change };
    });
    return newRates;
  };

  const updateRates = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 300));

    const newRates = generateRates();
    setRates(newRates);
    setLastUpdated(new Date());

    setChartValues((prev) => [...prev.slice(-49), newRates.INR.rate]);
    setLoading(false);
  };

  useEffect(() => {
    updateRates();
    const interval = setInterval(updateRates, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">

        <header className="text-center mb-10">
          <h1 className="mt-10 sm:mt-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="text-red-500 font-serif">Live</span> Currency Exchange Rates
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mt-2">
            Updated every 5 seconds
          </p>

          <button
            onClick={updateRates}
            disabled={loading}
            className="mt-6 px-6 py-3 md:px-10 md:py-5 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg text-lg md:text-2xl font-semibold hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Updating..." : "Refresh Rates"}
          </button>
        </header>

     
        <LiveChart data={chartValues} />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currencies.map((currency) => (
            <CurrencyCard
              key={currency.code}
              currency={currency}
              rateData={rates[currency.code]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
