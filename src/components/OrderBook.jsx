export default function OrderBook({ dummyPairs, search }) {
    const filteredPairs = dummyPairs.filter(pair =>
      Object.values(pair).some(val =>
        val.toLowerCase().includes(search.toLowerCase())
      )
    );
  
    return (
      <section className="bg-[#14142b] p-4 rounded">
        <div className="flex justify-between text-sm gap-2">
          <button className="text-green-400 border-2 border-gray-500 p-2 w-full">Order Book</button>
          <button className="text-red-400 border-2 border-gray-500 p-2 w-full">Recent Trade</button>
        </div>
        <div className="mt-4 text-sm">
          <div className="grid grid-cols-3 text-center font-semibold text-white border-b border-gray-600 pb-2">
            <div className="flex flex-col">Price <span>(USD)</span></div>
            <div className="flex flex-col">Amount <span>(BTC)</span></div>
            <div>Total</div>
          </div>
          <div className="grid grid-cols-3 text-center gap-y-2 pt-2 text-gray-300">
            {filteredPairs.map((pair, i) => (
                <>
               <div className={pair.type === "buy" ? "text-green-300" : "text-red-400"}>{pair.price}</div>
               <div>{pair.amount}</div>
               <div>{pair.total}</div>
               </>
            ))}
          </div>
        </div>
      </section>
    );
  }
  