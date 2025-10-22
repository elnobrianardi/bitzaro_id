import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-16 shadow-md sticky top-0 z-50">
      <div className="w-full mx-auto flex justify-between items-center">
       <div className="space-x-4">
        <Link href="/" className="text-md font-normal hover:underline">Buy Crypto</Link>
        <Link href="/" className="text-md font-normal hover:underline">Market</Link>
        <Link href="/" className="text-md font-normal hover:underline">Spot</Link>
        <Link href="/" className="text-md font-normal hover:underline">Margin</Link>
        <Link href="/" className="text-md font-normal hover:underline">Earn</Link>
        <Link href="/" className="text-md font-normal hover:underline">Loan</Link>
        <Link href="/" className="text-md font-normal hover:underline">Rewards</Link>
        <Link href="/" className="text-md font-normal hover:underline">Feedback</Link>
       </div>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Log In</Link>
          <button className="bg-[#6946eb] px-3 py-1 rounded-md">Sign up</button>
          <a href="/dashboard" className="hover:underline">English</a>
        </div>
      </div>
    </nav>
  );
}
