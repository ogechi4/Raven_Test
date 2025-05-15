import { Link } from 'react-router-dom';

export default function Header({ search, setSearch }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#14142b]">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" className="w-6 h-6" />
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link to="/">Exchange</Link>
          <Link to="/wallets">Wallets</Link>
          <a href="#">Roqqu Hub</a>
        </nav>
      </div>
      <input
        type="text"
        placeholder="Search pairs"
        className="bg-[#1e1e38] text-sm px-3 py-1 rounded border border-[#2e2e48] focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex items-center gap-2">
        <span className="text-sm">@Olakunle</span>
        <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}
