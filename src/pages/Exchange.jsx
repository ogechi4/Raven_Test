import { useState, useEffect } from "react";
import React from 'react';
import Header from "../components/Header";
import ChartSection from "../components/ChartSection";
import OrderBook from "../components/OrderBook";
import BuySellForm from "../components/BuySellForm";
import Footer from "../components/Footer";

const dummyPairs = [
  { price: "33646.34", amount: "0.36", total: "25999.23", type: "sell" },
  { price: "32123.12", amount: "0.42", total: "15300.10", type: "sell" },
  { price: "31000.00", amount: "0.25", total: "7750.00", type: "sell" },
  { price: "30000.11", amount: "0.30", total: "9003.33", type: "buy" },
  { price: "29500.00", amount: "0.15", total: "4425.00", type: "buy" },
];

export default function Exchange() {
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("0.00");

  useEffect(() => {
    const p = parseFloat(price);
    const a = parseFloat(amount);
    setTotal(p && a ? (p * a).toFixed(2) : "0.00");
  }, [price, amount]);

  return (
    <div className="bg-[#0e0e23] text-white font-sans min-h-screen">
      <Header search={search} setSearch={setSearch} />
      <main className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-2">
        <ChartSection />
        <OrderBook dummyPairs={dummyPairs} search={search} />
        <BuySellForm price={price} amount={amount} total={total} setPrice={setPrice} setAmount={setAmount} />
      </main>
      <Footer />
    </div>
  );
}
