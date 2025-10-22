'use client'
import React from "react";

const CryptoTable = () => {
  const data = [
    { id: 1, pair: "BTC/USDT", price: "--", change: "--", volume: "--" },
    { id: 2, pair: "BCH/USDT", price: "--", change: "--", volume: "--" },
    { id: 3, pair: "LTC/USDT", price: "--", change: "--", volume: "--" },
  ];

  return (
    <div className="flex flex-col py-16 px-8 md:px-32 gap-8 bg-black text-white">
      {/* Top Navigation */}
      <div className="flex justify-between items-center">
        <div className="flex gap-8 text-gray-400 font-medium items-center">
          <button className="bg-[#6842ff] py-1 px-3 text-white font-semibold rounded-sm">
            News
          </button>
          <a href="#" className="hover:text-[#6842ff] transition">
            Maintenance
          </a>
        </div>
        <div>
          <a href="#" className="text-[#6842ff]">More</a>
        </div>
      </div>

      {/* Market Table */}
      <div className="overflow-x-auto bg-[#111111] rounded-sm shadow-sm">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-[#111111]">
            <tr className="text-[#a6a6a6] border-b border-gray-700 text-sm">
              <th className="py-3 px-6 font-semibold">#</th>
              <th className="py-3 px-6 font-semibold">Markets</th>
              <th className="py-3 px-6 font-semibold">Last Price</th>
              <th className="py-3 px-6 font-semibold">Change</th>
              <th className="py-3 px-6 font-semibold">24H Volume</th>
              <th className="py-3 px-6 font-semibold text-right">Trade</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="py-3 px-6">{item.id}</td>
                <td className="py-3 px-6 font-medium text-[#a6a6a6]">
                  {item.pair}
                </td>
                <td className="py-3 px-6">{item.price}</td>
                <td className="py-3 px-6">{item.change}</td>
                <td className="py-3 px-6">{item.volume}</td>
                <td className="py-3 px-6 text-right">
                  <button className="px-4 py-2 bg-[#6842ff] text-white rounded-sm hover:bg-purple-600 transition text-sm">
                    Trade
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* View More Button (bottom-right inside table) */}
        <div className="flex justify-center pr-6 py-4">
          <button className="flex items-center gap-2 text-[#a6a6a6] hover:text-white transition">
            View More Market <span className="text-lg">{'>'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoTable;
