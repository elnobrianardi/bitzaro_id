export default function CryptoRow() {
  const data = [
    { pair: "BTC/USDT", price: "--", vol: "24H Vol --" },
    { pair: "ETH/USDT", price: "--", vol: "24H Vol --" },
    { pair: "ETC/USDT", price: "--", vol: "24H Vol --" },
    { pair: "ETH/BTC", price: "--", vol: "24H Vol --" },
  ];

  return (
    <div className="w-full mx-auto my-10 px-16">
      <div className="flex">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`flex-1 text-left px-4 ${
              idx !== data.length - 1 ? "border-r border-gray-700" : ""
            }`}
          >
            <div className="font-bold">{item.pair}</div>
            <div>{item.price}</div>
            <div className="text-sm text-gray-500">{item.vol}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
