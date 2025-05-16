import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ search, setSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#14142b] relative">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" className="w-6 h-6" />
        
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link to="/">Exchange</Link>
          <Link to="/wallets">Wallets</Link>
          <a href="#">Roqqu Hub</a>
        </nav>
      </div>

      <input
        type="text"
        placeholder="Search pairs"
        className="bg-[#1e1e38] text-sm px-3 py-1 rounded border border-[#2e2e48] focus:outline-none focus:ring-1 focus:ring-blue-500 w-1/2 sm:w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Desktop user info */}
      <div className="hidden md:flex items-center gap-2">
        <span className="text-sm">@Olakunle</span>
        <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-gray-300 focus:outline-none"
      >
        ☰
      </button>

      {/* Mobile sidebar */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 w-48 bg-[#1e1e38] text-white rounded shadow-lg p-4 z-50">
          <nav className="flex flex-col gap-2 text-sm">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Exchange</Link>
            <Link to="/wallets" onClick={() => setIsMenuOpen(false)}>Wallets</Link>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Roqqu Hub</a>
            <hr className="border-gray-600" />
            <div className="flex items-center gap-2 mt-2">
              <img src="/profile.jpg" alt="Profile" className="w-6 h-6 rounded-full" />
              <span className="text-sm">@Olakunle</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
