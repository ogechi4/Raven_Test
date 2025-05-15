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
    <section className="lg:col-span-2 bg-[#14142b] p-4 rounded">
      <div className="flex justify-between">
        <div className="text-green-400 font-semibold flex items-center gap-2">
          <img src="/btc.png" alt="BTC" className="w-6 h-6" />
          BTC/USDT <span>$20,634</span>
        </div>
        <div className="text-xs text-gray-400 flex gap-4">
          <div className="flex flex-col text-green-400">24h <span>+1.25%</span></div>
          <div className="flex flex-col">24h High:<span className="text-white">620.80</span></div>
          <div className="flex flex-col">24h Low:<span className="text-white">620.80</span></div>
          <div className="flex flex-col">24h Volume:<span className="text-white">76,505.26</span></div>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <p>Time</p>
        {["1H", "2H", "4H", "1D", "1W", "1M"].map((label) => (
          <button key={label} className="text-white bg-gray-400 p-2 rounded-full">{label}</button>
        ))}
      </div>

      <canvas ref={chartRef} className="mt-4 h-64" />

      <div className="flex mt-4 text-sm gap-4">
        {["Open Orders", "Positions", "Order History", "Trade History"].map(label => (
          <button key={label} className="px-3 py-1 bg-[#1f1f3d] rounded">{label}</button>
        ))}
      </div>
      <p className="mt-4 text-gray-500 text-sm">No Open Orders</p>
    </section>
  );
}
