export default function BuySellForm({ price, amount, total, setPrice, setAmount }) {
    return (
      <section className="bg-[#14142b] p-4 rounded">
        <div className="flex justify-between text-sm gap-2">
          <button className="text-green-400 border-2 border-gray-500 p-2 w-full">Buy</button>
          <button className="text-red-400 border-2 border-gray-500 p-2 w-full">Sell</button>
        </div>
  
        <form
          className="mt-4 space-y-2"
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Submitted order: $${total}`);
          }}
        >
          <input
            type="number"
            placeholder="Price (USD)"
            className="w-full px-3 py-2 bg-[#1f1f3d] border border-[#2e2e48] rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount (BTC)"
            className="w-full px-3 py-2 bg-[#1f1f3d] border border-[#2e2e48] rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select className="w-full px-3 py-2 bg-[#1f1f3d] border border-[#2e2e48] rounded text-white">
            <option disabled selected>Type</option>
            <option value="limit">Limit</option>
            <option value="market">Market</option>
            <option value="stop-limit">Stop Limit</option>
          </select>
          <div className="flex items-center space-x-2 text-sm text-white">
            <input type="checkbox" className="accent-[#7928ca] bg-[#1f1f3d] border border-[#2e2e48] rounded" />
            <label className="select-none">Post Only</label>
          </div>
          <div className="text-gray-400 flex justify-between text-bold text-lg">Total <span>{total}</span></div>
          <button type="submit" className="w-full py-2 bg-[#7928ca] rounded text-white">
            Buy BTC
          </button>
        </form>
      </section>
    );
  }
  