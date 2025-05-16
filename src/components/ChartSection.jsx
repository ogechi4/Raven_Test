import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function ChartSection() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [...Array(20).keys()],
        datasets: [
          {
            label: 'BTC/USDT',
            borderColor: '#00FF99',
            data: Array.from({ length: 20 }, () => Math.random() * 100 + 100),
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: { color: '#fff' },
            grid: { color: '#2e2e48' },
          },
          x: {
            ticks: { color: '#fff' },
            grid: { color: '#2e2e48' },
          },
        },
      },
    });
  }, []);

  return (
    <section className="lg:col-span-2 bg-[#14142b] p-4 rounded w-full">
      {/* Responsive top row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-green-400 font-semibold flex items-center gap-2">
          <img src="/btc.png" alt="BTC" className="w-6 h-6" />
          BTC/USDT <span>$20,634</span>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-gray-400">
          <div className="flex flex-col text-green-400">
            24h <span>+1.25%</span>
          </div>
          <div className="flex flex-col">
            24h High:<span className="text-white">620.80</span>
          </div>
          <div className="flex flex-col">
            24h Low:<span className="text-white">620.80</span>
          </div>
          <div className="flex flex-col">
            24h Volume:<span className="text-white">76,505.26</span>
          </div>
        </div>
      </div>

      {/* Time range buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 items-center text-sm">
        <p className="text-white">Time</p>
        {["1H", "2H", "4H", "1D", "1W", "1M"].map((label) => (
          <button key={label} className="text-white bg-gray-400 px-3 py-1 rounded-full">
            {label}
          </button>
        ))}
      </div>

      {/* Chart Canvas */}
      <div className="mt-4 h-64 sm:h-80 w-full">
        <canvas ref={chartRef} className="w-full h-full" />
      </div>

      {/* Bottom tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 text-sm">
        {["Open Orders", "Positions", "Order History", "Trade History"].map(label => (
          <button key={label} className="px-3 py-1 bg-[#1f1f3d] rounded text-white">
            {label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-gray-500 text-sm">No Open Orders</p>
    </section>
  );
}
